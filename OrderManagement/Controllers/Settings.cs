namespace OrderManagement.Controllers
{
    public class Settings
    {
        public DatabaseSettings Database { get; set; }
        public FolderSettings Folder { get; set; }

    }
    public class DatabaseSettings
    {   
        public string Host { get; set; }
        public string Schema { get; set; }
        public string User { get; set; }
        public string Password { get; set; }
    }
    public class FolderSettings
    {
        public string EmailTemplates { get; set; }
        public string DefaultHeaders { get; set; }
        public string CustomHeaders { get; set; }
        public string CustomImages { get; set; }
        public string SubjectFile { get; set; }
        public string Reports { get; set; }
        public string Records { get; set; }
        public string Documents { get; set; }
        public string Schemas { get; set; }
    }
}