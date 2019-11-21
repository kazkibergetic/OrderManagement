using MySql.Data.MySqlClient;    
using System;    
using System.Collections.Generic;
using OrderManagement.Controllers;


namespace OrderManagement.Models
{
    public class OrdersTrackingContext
    {
        public string ConnectionString { get; set; }    
        private readonly Settings _settings;

    
        public OrdersTrackingContext(Settings settings)    
        {    
            _settings = settings;
            this.ConnectionString = "server="+ _settings.Database.Host + ";port=3306;database="+  _settings.Database.Schema + ";user=" + _settings.Database.User + ";password=" + _settings.Database.Password;
        }    
    
        private MySqlConnection GetConnection()    
        {    
            return new MySqlConnection(ConnectionString);    
        }  
        
        
        public List<Machinery> GetAllMachineryOrders()  
        {  
            List<Machinery> list = new List<Machinery>();  
      
            using (MySqlConnection conn = GetConnection())  
            {  
                conn.Open();  
                MySqlCommand cmd = new MySqlCommand("select * from Machinery", conn);  
      
                using (var reader = cmd.ExecuteReader())  
                {  
                    while (reader.Read())  
                    {  
                        list.Add(new Machinery()  
                        {  
                            Id = Convert.ToInt32(reader["Id"]),  
                            Order_num = reader["Order_num"].ToString()
                        });  
                    }  
                }  
            }  
            return list;  
        }
        
    }  
}