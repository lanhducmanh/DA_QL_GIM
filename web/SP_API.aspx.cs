using Newtonsoft.Json.Linq;
using System;
using System.Globalization;
using System.Web;
using System.Web.UI;

namespace web
{
    public partial class SP_API : System.Web.UI.Page
    {
        Boolean IsLoggedIn = false;
        protected void Page_Load(object sender, EventArgs e)
        {
            string action = this.Request["action"];

            switch (action)
            {
                case "dangky":
                    dangky();
                    break;

                case "login":
                    login();
                    break;

                case "check_login":
                    check_login();
                    break;

                case "logout":
                    logout();
                    break;

                case "get_infor":
                    get_infor();
                    break;

                case "add_thethanhvien":
                    add_thethanhvien();
                    break;

                case "add_phongtap":
                    AddPhongTap();
                    break;

                case "add_huongluyenvien":
                    AddHuongLuyenVien();
                    break;

                case "add_lophoc":
                    AddLopHoc();
                    break;

                case "add_lichlophoc":
                    AddLichLopHoc();
                    break;
                    
                case "add_hoivien":
                    add_hoivien();
                    break;

                case "update_thethanhvien":
                    update_thethanhvien();
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
                    
                case "update_hoivien":
                    update_hoivien();
                    break;

                case "delete_thethanhvien":
                    delete_thethanhvien();
                    break;

                case "delete_phongtap":
                    DeletePhongTap();
                    break;

                case "delete_huongluyenvien":
                    DeleteHuongLuyenVien();
                    break;

                case "delete_lophoc":
                    DeleteLopHoc();
                    break;

                case "delete_lichlophoc":
                    DeleteLichLopHoc();
                    break;
                    
                case "delete_hoivien":
                    delete_hoivien();
                    break;

                case "search":
                    search();
                    break;

                default:
                    thong_bao_loi();
                    break;
            }
        }

        public void add_thethanhvien()
        {
            string MaThe = this.Request["MaThe"];
            string MaHoiVien = this.Request["MaHoiVien"];
            string MaLich = this.Request["MaLich"];
            string LoaiThe = this.Request["LoaiThe"];
            string NgayBatDau = this.Request["NgayBatDau"];
            string NgayKetThuc = this.Request["NgayKetThuc"];
            string GiaTien = this.Request["GiaTien"];

            Lib.Read_DB db = get_db();
            string json = db.add_thethanhvien(MaThe, MaHoiVien, MaLich, LoaiThe, NgayBatDau, NgayKetThuc, GiaTien);
            this.Response.Write(json);
        }

        public void AddPhongTap()
        {
            string maPhong = this.Request["MaPhong"];
            string tenPhong = this.Request["TenPhong"];
            string diaChi = this.Request["DiaChi"];

            Lib.Read_DB db = get_db();
            string json = db.add_phongtap(maPhong, tenPhong, diaChi);
            this.Response.Write(json);
        }

        public void AddHuongLuyenVien()
        {
            string maHLV = this.Request["MaHLV"];
            string tenHLV = this.Request["TenHLV"];
            string chuyenMon = this.Request["ChuyenMon"];

            Lib.Read_DB db = get_db();
            string json = db.add_huongluyenvien(maHLV, tenHLV, chuyenMon);
            this.Response.Write(json);
        }

        public void AddLopHoc()
        {
            string maLop = this.Request["MaLop"];
            string tenLop = this.Request["TenLop"];
            string maHLV = this.Request["MaHLV"];

            Lib.Read_DB db = get_db();
            string json = db.add_lophoc(maLop, tenLop, maHLV);
            this.Response.Write(json);
        }

        public void AddLichLopHoc()
        {
            string maLich = this.Request["MaLich"];
            string maPhong = this.Request["Maphong"];
            string maLop = this.Request["MaLop"];
            string thoiGianBatDau = this.Request["ThoiGianBatDau"];
            string thoiGianKetThuc = this.Request["ThoiGianKetThuc"];

            Lib.Read_DB db = get_db();
            string json = db.add_lichlophoc(maLich, maPhong, maLop, thoiGianBatDau, thoiGianKetThuc);
            this.Response.Write(json);
        }
        
        public void add_hoivien()
        {
            string MaHoiVien = this.Request["MaHoiVien"];
            string TenHoiVien = this.Request["TenHoiVien"];
            string SoDienThoai = this.Request["SoDienThoai"];
            string Email = this.Request["Email"];

            Lib.Read_DB db = get_db();
            string json = db.add_hoivien(MaHoiVien, TenHoiVien, SoDienThoai, Email);
            this.Response.Write(json);
        }

        public void update_thethanhvien()
        {
            string MaThe = this.Request["MaThe"];
            string MaHoiVien = this.Request["MaHoiVien"];
            string MaLich = this.Request["MaLich"];
            string LoaiThe = this.Request["LoaiThe"];
            string NgayBatDau = this.Request["NgayBatDau"];
            string NgayKetThuc = this.Request["NgayKetThuc"];
            string GiaTien = this.Request["GiaTien"];

            Lib.Read_DB db = get_db();
            string json = db.update_thethanhvien(MaThe, MaHoiVien, MaLich, LoaiThe, NgayBatDau, NgayKetThuc, GiaTien);
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
            string json = db.update_lophoc(maLop, tenLop, maHLV);
            this.Response.Write(json);
        }

        public void UpdateLichLopHoc()
        {
            string maLich = this.Request["MaLich"];
            string maPhong = this.Request["Maphong"];
            string maLop = this.Request["MaLop"];
            string thoiGianBatDau = this.Request["ThoiGianBatDau"];
            string thoiGianKetThuc = this.Request["ThoiGianKetThuc"];

            string dateFormat = "yyyy-MM-ddTHH:mm";

            DateTime thoiGianBatDauDateTime;
            DateTime thoiGianKetThucDateTime;

            if (!DateTime.TryParseExact(thoiGianBatDau, dateFormat, CultureInfo.InvariantCulture, DateTimeStyles.None, out thoiGianBatDauDateTime))
            {
                this.Response.Write("{\"ok\":0, \"msg\": \"Thời gian bắt đầu không hợp lệ.\"}");
                return;
            }

            if (!DateTime.TryParseExact(thoiGianKetThuc, dateFormat, CultureInfo.InvariantCulture, DateTimeStyles.None, out thoiGianKetThucDateTime))
            {
                this.Response.Write("{\"ok\":0, \"msg\": \"Thời gian kết thúc không hợp lệ.\"}");
                return;
            }

            Lib.Read_DB db = get_db();
            string json = db.update_lichlophoc(maLich, maPhong, maLop, thoiGianBatDauDateTime, thoiGianKetThucDateTime);
            this.Response.Write(json);
        }


        public void update_hoivien()
        {
            string MaHoiVien = this.Request["MaHoiVien"];
            string TenHoiVien = this.Request["TenHoiVien"];
            string SoDienThoai = this.Request["SoDienThoai"];
            string Email = this.Request["Email"];

            Lib.Read_DB db = get_db();
            string json = db.update_hoivien(MaHoiVien, TenHoiVien, SoDienThoai, Email);
            this.Response.Write(json);
        }

        public void delete_thethanhvien()
        {
            string MaThe = this.Request["MaThe"];
            Lib.Read_DB db = get_db();
            string json = db.delete_thethanhvien(MaThe);
            this.Response.Write(json);
        }

        public void DeletePhongTap()
        {
            string maPhong = this.Request["MaPhong"];
            Lib.Read_DB db = get_db();
            string json = db.delete_phongtap(maPhong);
            this.Response.Write(json);
        }

        public void DeleteHuongLuyenVien()
        {
            string maHLV = this.Request["MaHLV"];
            Lib.Read_DB db = get_db();
            string json = db.delete_huongluyenvien(maHLV);
            this.Response.Write(json);
        }

        public void DeleteLopHoc()
        {
            string maLop = this.Request["MaLop"];
            Lib.Read_DB db = get_db();
            string json = db.delete_lophoc(maLop);
            this.Response.Write(json);
        }

        public void DeleteLichLopHoc()
        {
            string maLich = this.Request["MaLich"];
            Lib.Read_DB db = get_db();
            string json = db.delete_lichlophoc(maLich);
            this.Response.Write(json);
        }
        
        public void delete_hoivien()
        {
            string MaHoiVien = this.Request["MaHoiVien"];
            Lib.Read_DB db = get_db();
            string json = db.delete_hoivien(MaHoiVien);
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
            db.cnstr = "Data Source=DESKTOP-719DGDE\\DUCMANHH100;Initial Catalog=QL_Phong_Gym;Integrated Security=True;";
            return db;
        }

        void get_infor()
        {
            string Loai = this.Request["Loai"];
            Lib.Read_DB db = get_db();
            string json = db.get_infor(Loai);
            this.Response.Write(json);
        }

        void search()
        {
            string loai = this.Request["loai"];
            string timKiem = this.Request["timKiem"];
            Lib.Read_DB db = get_db();
            string result = db.search(loai, timKiem);
            this.Response.Write(result);
        }

        void dangky()
        {
            string user = this.Request["user"];
            string pass = this.Request["pass"];
            string gmail = this.Request["gmail"];
            string dienthoai = this.Request["dienthoai"];
            string name = this.Request["name"];
            var db = get_db();
            string result = db.dangky(user, pass, name, gmail, dienthoai);
            this.Response.Write(result);
        }
        void login()
        {
            string user = this.Request["user"];
            string pass = this.Request["pass"];
            var db = get_db();
            string json = db.login(user, pass);
            this.Response.Write(json);

            if (json.Contains("\"ok\":1"))
            {
                IsLoggedIn = true;
                Session["IsLoggedIn"] = IsLoggedIn;

                var userInfo = JObject.Parse(json);
                Session["user"] = userInfo["user"].ToString();
                Session["name"] = userInfo["name"].ToString();
                Session["level"] = (int)userInfo["level"];
                Session["gmail"] = userInfo["gmail"].ToString();
                Session["dienthoai"] = userInfo["dienthoai"].ToString();
                Session["lastLogin"] = userInfo["lastLogin"].ToString();
            }
        }

        void check_login()
        {
            if (Session["user"] != null)
            {
                string name = Session["name"] != null ? Session["name"].ToString() : "Không có tên";
                string level = Session["level"] != null ? Session["level"].ToString() : "Không có cấp độ";
                string gmail = Session["gmail"] != null ? Session["gmail"].ToString() : "Không có gmail";
                string dienthoai = Session["dienthoai"] != null ? Session["dienthoai"].ToString() : "Không có dienthoai";
                string lastLogin = Session["lastLogin"] != null ? Session["lastLogin"].ToString() : "Chưa có đăng nhập trước";

                this.Response.Write($"{{\"ok\":1, \"name\":\"{name}\", \"level\":\"{level}\", \"gmail\":\"{gmail}\", \"dienthoai\":\"{dienthoai}\", \"lastLogin\":\"{lastLogin}\"}}");
            }
            else
            {
                this.Response.Write("{\"ok\":0, \"msg\":\"Chưa đăng nhập\"}");
            }
        }
        void logout()
        {
            IsLoggedIn = false;
            Session.Abandon();
            Response.Write("{\"ok\":1, \"msg\":\"Đăng xuất thành công.\"}");
        }
    }
}
