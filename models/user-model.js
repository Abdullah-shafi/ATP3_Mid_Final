var db = require('./db');

module.exports ={
	getAll:function(callback){
		
		var sql = "select * from property,customer,property_picture where property.username=customer.username and property.property_id=property_picture.property_id";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(0);
			}
		});
	},
	getProfile:function(user,callback){
		

		var sql = "select * from customer where username= ?";
		db.getResult(sql, [user.username], function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},
	validate: function(user, callback){

		var sql = "select * from customer where username=? and password=?";
		db.getResult(sql, [user.username, user.password], function(result){
			if(result.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getProperty:function(user,callback){
		var sql = "select * from property,customer,property_picture where property.property_id=? and property.username=customer.username and property.property_id=property_picture.property_id ";
		db.getResult(sql, [user.id], function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(0);
			}
		});
	},
	getProperty2:function(user,callback){
		var sql = "select * from property,customer,property_picture where property.username=? and property.username=customer.username and property.property_id=property_picture.property_id  ";
		db.getResult(sql, [user.username], function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(0);
			}
		});
	},

	delete: function(user, callback){
		var sql = "delete from property where property_id=?";
		db.execute(sql, [user.id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

   updateProfile: function(user, callback){
		var sql = "update customer set name=?,phone=?,email=? where username=?";
		db.execute(sql, [user.name,user.phone,user.email,user.username], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}




}
