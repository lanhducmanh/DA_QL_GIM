using System;
using System.Collections.Generic;

using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace web
{
    public partial class SP_API : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string action = this.Request["action"];

            switch (action)
            {
                case "get_infor":
                    get_infor();
                    break;

                case "delete_lich":
                    delete_lich();
                    break;
                case "update_phongtap":
                    UpdatePhongTap();
                    break;

                case "update_huongluyenvien":
                    UpdateHuongLuyenVien();
                    break;

                case "update_lophoc":
                    UpdateLopHoc();
                    break;

                case "update_lichlophoc":
                    UpdateLichLopHoc();
                    break;

                default:
                    thong_bao_loi();
                    break;
            }
        }

        void delete_lich()
        {
            string maLich = this.Request["maLich"];
            Lib.Read_DB db = get_db();
            string json = db.delete_lichlophoc(maLich);
            this.Response.Write(json);
        }

        public void UpdatePhongTap()
        {
            string maPhong = this.Request["MaPhong"];
            string tenPhong = this.Request["TenPhong"];
            string diaChi = this.Request["DiaChi"];

            Lib.Read_DB db = get_db(); 
            string json = db.update_phongtap(maPhong, tenPhong, diaChi); 
            this.Response.Write(json); 
        }

        public void UpdateHuongLuyenVien()
        {
            string maHLV = this.Request["MaHLV"];
            string tenHLV = this.Request["TenHLV"];
            string chuyenMon = this.Request["ChuyenMon"];

            Lib.Read_DB db = get_db(); 
            string json = db.update_huongluyenvien(maHLV, tenHLV, chuyenMon); 
            this.Response.Write(json); 
        }

        public void UpdateLopHoc()
        {
            string maLop = this.Request["MaLop"];
            string tenLop = this.Request["TenLop"];
            string maHLV = this.Request["MaHLV"];

            Lib.Read_DB db = get_db(); 
            string json = db.update_LopHoc(maLop, tenLop, maHLV); 
            this.Response.Write(json); 
        }

        public void UpdateLichLopHoc()
        {
            string maLich = this.Request["MaLich"];
            string maPhong = this.Request["Maphong"];
            string maLop = this.Request["MaLop"];
            string thoiGianBatDau = this.Request["ThoiGianBatDau"];
            string thoiGianKetThuc = this.Request["ThoiGianKetThuc"];

            Lib.Read_DB db = get_db(); 
            string json = db.update_lichlophoc(maLich, maPhong, maLop, thoiGianBatDau, thoiGianKetThuc); 
            this.Response.Write(json); 
        }

        void thong_bao_loi()
        {
            string rep = "{\"ok\":false,\"msg\":\"Lỗi rồi nhé, ko có action này!\"}";
            this.Response.Write(rep);
        }
        Lib.Read_DB get_db()
        {
            Lib.Read_DB db = new Lib.Read_DB();
            db.cnstr = "Data Source=DESKTOP-719DGDE\\DUCMANHH100;Initial Catalog=QL_Phong_Gim;Integrated Security=True;";
            return db;
        }


        void get_infor()
        {
            Lib.Read_DB db = get_db();
            string json = db.get_infor();
            this.Response.Write(json);
        }

    }
}