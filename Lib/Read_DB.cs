using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Text;
using System.Text.RegularExpressions;
using System.Globalization;

namespace Lib
{
    public class Read_DB
    {
        public string cnstr;
        public string get_infor(string Loai)
        {
            string json = "";
            try
            {

                using (SqlConnection conn = new SqlConnection(cnstr))
                {
                    conn.Open();
                    using (SqlCommand cmd = conn.CreateCommand())
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.CommandText = "SP_VIP";
                        cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "get_infor";
                        cmd.Parameters.Add("@Loai", SqlDbType.VarChar, 50).Value = Loai;
                        object result = cmd.ExecuteScalar();
                        json = (string)result;
                    }
                }
            }
            catch
            {
                json = "{\"ok\":0,\"msg\":\"Lỗi rồi\"}";
            }
            return json;
        }
        public string search(string loai, string timKiem)
        {
            string json = "";
            try
            {
                using (SqlConnection conn = new SqlConnection(cnstr))
                {
                    conn.Open();
                    using (SqlCommand cmd = conn.CreateCommand())
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.CommandText = "SP_VIP";

                        cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "search";
                        cmd.Parameters.Add("@Loai", SqlDbType.NVarChar, 50).Value = loai;
                        cmd.Parameters.Add("@timKiem", SqlDbType.NVarChar, 255).Value = timKiem;
                        object result = cmd.ExecuteScalar();
                        json = (string)result;
                    }
                }
            }
            catch (Exception ex)
            {
                json = "{\"ok\":0,\"msg\":\"Lỗi rồi: " + ex.Message + "\"}";
            }
            return json;
        }
        public string add_thethanhvien(string MaThe, string MaHoiVien, string MaLich, string LoaiThe, string NgayBatDau, string NgayKetThuc, string GiaTien)
        {
            string json = "";

            try
            {
                using (SqlConnection conn = new SqlConnection(cnstr))
                {
                    conn.Open();
                    using (SqlCommand cmd = conn.CreateCommand())
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.CommandText = "SP_VIP";
                        cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "add_thethanhvien";
                        cmd.Parameters.Add("@MaThe", SqlDbType.VarChar, 50).Value = MaThe;
                        cmd.Parameters.Add("@MaHoiVien", SqlDbType.VarChar, 50).Value = MaHoiVien;
                        cmd.Parameters.Add("@MaLich", SqlDbType.VarChar, 50).Value = MaLich;
                        cmd.Parameters.Add("@LoaiThe", SqlDbType.NVarChar, 100).Value = LoaiThe;
                        cmd.Parameters.Add("@NgayBatDau", SqlDbType.DateTime).Value = DateTime.TryParse(NgayBatDau, out var start) ? (object)start : DBNull.Value;
                        cmd.Parameters.Add("@NgayKetThuc", SqlDbType.DateTime).Value = DateTime.TryParse(NgayKetThuc, out var end) ? (object)end : DBNull.Value;
                        cmd.Parameters.Add("@GiaTien", SqlDbType.Decimal,18).Value = GiaTien;
                        object result = cmd.ExecuteScalar();
                        json = (string)result;
                    }
                }
            }
            catch (Exception ex)
            {
                json = "{\"ok\":0,\"msg\":\"Lỗi rồi: " + ex.Message + "\"}";
            }

            return json;
        }

        public string update_thethanhvien(string MaThe, string MaHoiVien, string MaLich, string LoaiThe, string NgayBatDau, string NgayKetThuc, string GiaTien)
        {
            string json = "";

            try
            {
                using (SqlConnection conn = new SqlConnection(cnstr))
                {
                    conn.Open();
                    using (SqlCommand cmd = conn.CreateCommand())
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.CommandText = "SP_VIP";
                        cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "update_thethanhvien";
                        cmd.Parameters.Add("@MaThe", SqlDbType.VarChar, 50).Value = MaThe;
                        cmd.Parameters.Add("@MaHoiVien", SqlDbType.VarChar, 50).Value = MaHoiVien;
                        cmd.Parameters.Add("@MaLich", SqlDbType.VarChar, 50).Value = MaLich;
                        cmd.Parameters.Add("@LoaiThe", SqlDbType.NVarChar, 100).Value = LoaiThe;
                        cmd.Parameters.Add("@NgayBatDau", SqlDbType.DateTime).Value = DateTime.TryParse(NgayBatDau, out var start) ? (object)start : DBNull.Value;
                        cmd.Parameters.Add("@NgayKetThuc", SqlDbType.DateTime).Value = DateTime.TryParse(NgayKetThuc, out var end) ? (object)end : DBNull.Value;
                        cmd.Parameters.Add("@GiaTien", SqlDbType.Decimal,18).Value = GiaTien;
                        object result = cmd.ExecuteScalar();
                        json = (string)result;
                    }
                }
            }
            catch (Exception ex)
            {
                json = "{\"ok\":0,\"msg\":\"Lỗi rồi: " + ex.Message + "\"}";
            }

            return json;
        }
        
        public string delete_thethanhvien(string MaThe)
        {
            string json = "";

            try
            {
                using (SqlConnection conn = new SqlConnection(cnstr))
                {
                    conn.Open();
                    using (SqlCommand cmd = conn.CreateCommand())
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.CommandText = "SP_VIP";
                        cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "delete_thethanhvien";
                        cmd.Parameters.Add("@MaThe", SqlDbType.VarChar, 50).Value = MaThe;
                        object result = cmd.ExecuteScalar();
                        json = (string)result;
                    }
                }
            }
            catch (Exception ex)
            {
                json = "{\"ok\":0,\"msg\":\"Lỗi rồi: " + ex.Message + "\"}";
            }

            return json;
        }

        public string add_phongtap(string MaPhong, string TenPhong, string DiaChi)
        {
            string json = "";
            try
            {
                using (SqlConnection conn = new SqlConnection(cnstr))
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SP_VIP", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "add_phongtap";
                        cmd.Parameters.Add("@MaPhong", SqlDbType.VarChar).Value = MaPhong;
                        cmd.Parameters.Add("@TenPhong", SqlDbType.NVarChar).Value = TenPhong;
                        cmd.Parameters.Add("@DiaChi", SqlDbType.NVarChar).Value = DiaChi;

                        object rs = cmd.ExecuteScalar();
                        if (rs != null)
                        {
                            json = rs.ToString();
                        }
                        else
                        {
                            json = "{\"ok\":0,\"msg\":\"Không có dữ liệu trả về\"}";
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                json = "{\"ok\":0,\"msg\":\"Lỗi rồi: " + ex.Message + "\"}";
            }
            return json;
        }

        public string update_phongtap(string MaPhong, string TenPhong, string DiaChi)
        {
            string json = "";
            try
            {
                using (SqlConnection conn = new SqlConnection(cnstr))
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SP_VIP", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "update_phongtap";
                        cmd.Parameters.Add("@MaPhong", SqlDbType.VarChar).Value = MaPhong;
                        cmd.Parameters.Add("@TenPhong", SqlDbType.NVarChar).Value = TenPhong;
                        cmd.Parameters.Add("@DiaChi", SqlDbType.NVarChar).Value = DiaChi;

                        object rs = cmd.ExecuteScalar();
                        if (rs != null)
                        {
                            json = rs.ToString();
                        }
                        else
                        {
                            json = "{\"ok\":0,\"msg\":\"Không có dữ liệu trả về\"}";
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                json = "{\"ok\":0,\"msg\":\"Lỗi rồi: " + ex.Message + "\"}";
            }
            return json;
        }

        public string delete_phongtap(string MaPhong)
        {
            string json = "";
            try
            {
                using (SqlConnection conn = new SqlConnection(cnstr))
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SP_VIP", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "delete_phongtap";
                        cmd.Parameters.Add("@MaPhong", SqlDbType.VarChar).Value = MaPhong;

                        object rs = cmd.ExecuteScalar();
                        if (rs != null)
                        {
                            json = rs.ToString();
                        }
                        else
                        {
                            json = "{\"ok\":0,\"msg\":\"Không có dữ liệu trả về\"}";
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                json = "{\"ok\":0,\"msg\":\"Lỗi rồi: " + ex.Message + "\"}";
            }
            return json;
        }

        public string add_hoivien(string MaHoiVien, string TenHoiVien, string SoDienThoai, string Email)
        {
            string json = "";
            try
            {
                using (SqlConnection conn = new SqlConnection(cnstr))
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SP_VIP", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "add_hoivien";
                        cmd.Parameters.Add("@MaHoiVien", SqlDbType.VarChar).Value = MaHoiVien;
                        cmd.Parameters.Add("@TenHoiVien", SqlDbType.NVarChar).Value = TenHoiVien;
                        cmd.Parameters.Add("@SoDienThoai", SqlDbType.VarChar).Value = SoDienThoai;
                        cmd.Parameters.Add("@Email", SqlDbType.VarChar).Value = Email;

                        object rs = cmd.ExecuteScalar();
                        if (rs != null)
                        {
                            json = rs.ToString();
                        }
                        else
                        {
                            json = "{\"ok\":0,\"msg\":\"Không có dữ liệu trả về\"}";
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                json = "{\"ok\":0,\"msg\":\"Lỗi rồi: " + ex.Message + "\"}";
            }
            return json;
        }

        public string update_hoivien(string MaHoiVien, string TenHoiVien, string SoDienThoai, string Email)
        {
            string json = "";
            try
            {
                using (SqlConnection conn = new SqlConnection(cnstr))
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SP_VIP", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "update_hoivien";
                        cmd.Parameters.Add("@MaHoiVien", SqlDbType.VarChar).Value = MaHoiVien;
                        cmd.Parameters.Add("@TenHoiVien", SqlDbType.NVarChar).Value = TenHoiVien;
                        cmd.Parameters.Add("@SoDienThoai", SqlDbType.VarChar).Value = SoDienThoai;
                        cmd.Parameters.Add("@Email", SqlDbType.VarChar).Value = Email;

                        object rs = cmd.ExecuteScalar();
                        if (rs != null)
                        {
                            json = rs.ToString();
                        }
                        else
                        {
                            json = "{\"ok\":0,\"msg\":\"Không có dữ liệu trả về\"}";
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                json = "{\"ok\":0,\"msg\":\"Lỗi rồi: " + ex.Message + "\"}";
            }
            return json;
        }

        public string delete_hoivien(string MaHoiVien)
        {
            string json = "";
            try
            {
                using (SqlConnection conn = new SqlConnection(cnstr))
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SP_VIP", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "delete_hoivien";
                        cmd.Parameters.Add("@MaHoiVien", SqlDbType.VarChar).Value = MaHoiVien;

                        object rs = cmd.ExecuteScalar();
                        if (rs != null)
                        {
                            json = rs.ToString();
                        }
                        else
                        {
                            json = "{\"ok\":0,\"msg\":\"Không có dữ liệu trả về\"}";
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                json = "{\"ok\":0,\"msg\":\"Lỗi rồi: " + ex.Message + "\"}";
            }
            return json;
        }

        public string add_huongluyenvien(string MaHLV, string TenHLV, string ChuyenMon)
        {
            string json = "";
            try
            {
                using (SqlConnection conn = new SqlConnection(cnstr))
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SP_VIP", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "add_huongluyenvien";
                        cmd.Parameters.Add("@MaHLV", SqlDbType.VarChar).Value = MaHLV;
                        cmd.Parameters.Add("@TenHLV", SqlDbType.NVarChar).Value = TenHLV;
                        cmd.Parameters.Add("@ChuyenMon", SqlDbType.NVarChar).Value = ChuyenMon;

                        object rs = cmd.ExecuteScalar();
                        if (rs != null)
                        {
                            json = rs.ToString();
                        }
                        else
                        {
                            json = "{\"ok\":0,\"msg\":\"Không có dữ liệu trả về\"}";
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                json = "{\"ok\":0,\"msg\":\"Lỗi rồi: " + ex.Message + "\"}";
            }
            return json;
        }

        public string update_huongluyenvien(string MaHLV, string TenHLV, string ChuyenMon)
        {
            string json = "";
            try
            {
                using (SqlConnection conn = new SqlConnection(cnstr))
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SP_VIP", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "update_huongluyenvien";
                        cmd.Parameters.Add("@MaHLV", SqlDbType.VarChar).Value = MaHLV;
                        cmd.Parameters.Add("@TenHLV", SqlDbType.NVarChar).Value = TenHLV;
                        cmd.Parameters.Add("@ChuyenMon", SqlDbType.NVarChar).Value = ChuyenMon;

                        object rs = cmd.ExecuteScalar();
                        if (rs != null)
                        {
                            json = rs.ToString();
                        }
                        else
                        {
                            json = "{\"ok\":0,\"msg\":\"Không có dữ liệu trả về\"}";
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                json = "{\"ok\":0,\"msg\":\"Lỗi rồi: " + ex.Message + "\"}";
            }
            return json;
        }

        public string delete_huongluyenvien(string MaHLV)
        {
            string json = "";
            try
            {
                using (SqlConnection conn = new SqlConnection(cnstr))
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SP_VIP", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "delete_huongluyenvien";
                        cmd.Parameters.Add("@MaHLV", SqlDbType.VarChar).Value = MaHLV;

                        object rs = cmd.ExecuteScalar();
                        if (rs != null)
                        {
                            json = rs.ToString();
                        }
                        else
                        {
                            json = "{\"ok\":0,\"msg\":\"Không có dữ liệu trả về\"}";
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                json = "{\"ok\":0,\"msg\":\"Lỗi rồi: " + ex.Message + "\"}";
            }
            return json;
        }

        public string add_lophoc(string MaLop, string TenLop,string MaHLV)
        {
            string json = "";
            try
            {
                using (SqlConnection conn = new SqlConnection(cnstr))
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SP_VIP", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "add_lophoc";
                        cmd.Parameters.Add("@MaLop", SqlDbType.VarChar,50).Value = MaLop;
                        cmd.Parameters.Add("@TenLop", SqlDbType.NVarChar).Value = TenLop;
                        cmd.Parameters.Add("@MaHLV", SqlDbType.VarChar, 50).Value = MaHLV;

                        object rs = cmd.ExecuteScalar();
                        if (rs != null)
                        {
                            json = rs.ToString();
                        }
                        else
                        {
                            json = "{\"ok\":0,\"msg\":\"Không có dữ liệu trả về\"}";
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                json = "{\"ok\":0,\"msg\":\"Lỗi rồi: " + ex.Message + "\"}";
            }
            return json;
        }

        public string update_lophoc(string MaLop, string TenLop, string MaHLV)
        {
            string json = "";
            try
            {
                using (SqlConnection conn = new SqlConnection(cnstr))
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SP_VIP", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "update_lophoc";
                        cmd.Parameters.Add("@MaLop", SqlDbType.VarChar).Value = MaLop;
                        cmd.Parameters.Add("@TenLop", SqlDbType.NVarChar).Value = TenLop;
                        cmd.Parameters.Add("@MaHLV", SqlDbType.VarChar, 50).Value = MaHLV;

                        object rs = cmd.ExecuteScalar();
                        if (rs != null)
                        {
                            json = rs.ToString();
                        }
                        else
                        {
                            json = "{\"ok\":0,\"msg\":\"Không có dữ liệu trả về\"}";
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                json = "{\"ok\":0,\"msg\":\"Lỗi rồi: " + ex.Message + "\"}";
            }
            return json;
        }

        public string delete_lophoc(string MaLop)
        {
            string json = "";
            try
            {
                using (SqlConnection conn = new SqlConnection(cnstr))
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SP_VIP", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "delete_lophoc";
                        cmd.Parameters.Add("@MaLop", SqlDbType.VarChar).Value = MaLop;

                        object rs = cmd.ExecuteScalar();
                        if (rs != null)
                        {
                            json = rs.ToString();
                        }
                        else
                        {
                            json = "{\"ok\":0,\"msg\":\"Không có dữ liệu trả về\"}";
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                json = "{\"ok\":0,\"msg\":\"Lỗi rồi: " + ex.Message + "\"}";
            }
            return json;
        }

        public string add_lichlophoc(string MaLich, string ThoiGianBatDau, string ThoiGianKetThuc, string MaLop, string MaPhong)
        {
            string json = "";
            try
            {
                using (SqlConnection conn = new SqlConnection(cnstr))
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SP_VIP", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "add_lichlophoc";
                        cmd.Parameters.Add("@MaLich", SqlDbType.VarChar).Value = MaLich;
                        cmd.Parameters.Add("@ThoiGianBatDau", SqlDbType.DateTime).Value = DateTime.Parse(ThoiGianBatDau);
                        cmd.Parameters.Add("@ThoiGianKetThuc", SqlDbType.DateTime).Value = DateTime.Parse(ThoiGianKetThuc);
                        cmd.Parameters.Add("@MaPhong", SqlDbType.VarChar).Value = MaPhong;

                        object rs = cmd.ExecuteScalar();
                        if (rs != null)
                        {
                            json = rs.ToString();
                        }
                        else
                        {
                            json = "{\"ok\":0,\"msg\":\"Không có dữ liệu trả về\"}";
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                json = "{\"ok\":0,\"msg\":\"Lỗi rồi: " + ex.Message + "\"}";
            }
            return json;
        }

        public string update_lichlophoc(string MaLich, string MaPhong, string MaLop, DateTime ThoiGianBatDau, DateTime ThoiGianKetThuc)
        {
            string json = "";
            try
            {
                using (SqlConnection conn = new SqlConnection(cnstr))
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SP_VIP", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "update_lichlophoc";
                        cmd.Parameters.Add("@MaLich", SqlDbType.VarChar).Value = MaLich;
                        cmd.Parameters.Add("@MaPhong", SqlDbType.VarChar).Value = MaPhong;
                        cmd.Parameters.Add("@MaLop", SqlDbType.VarChar).Value = MaLop;
                        cmd.Parameters.Add("@ThoiGianBatDau", SqlDbType.DateTime).Value = ThoiGianBatDau;
                        cmd.Parameters.Add("@ThoiGianKetThuc", SqlDbType.DateTime).Value = ThoiGianKetThuc;

                        object rs = cmd.ExecuteScalar();
                        if (rs != null)
                        {
                            json = rs.ToString();
                        }
                        else
                        {
                            json = "{\"ok\":0,\"msg\":\"Không có dữ liệu trả về\"}";
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                json = "{\"ok\":0,\"msg\":\"Lỗi rồi: " + ex.Message + "\"}";
            }
            return json;
        }


        public string delete_lichlophoc(string MaLich)
        {
            string json = "";
            try
            {
                using (SqlConnection conn = new SqlConnection(cnstr))
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SP_VIP", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "delete_lichlophoc";
                        cmd.Parameters.Add("@MaLich", SqlDbType.VarChar).Value = MaLich;

                        object rs = cmd.ExecuteScalar();
                        if (rs != null)
                        {
                            json = rs.ToString();
                        }
                        else
                        {
                            json = "{\"ok\":0,\"msg\":\"Không có dữ liệu trả về\"}";
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                json = "{\"ok\":0,\"msg\":\"Lỗi rồi: " + ex.Message + "\"}";
            }
            return json;
        }

        public string login(string gmail, string pass)
        {
            string json = "";
            {
                try
                {
                    using (SqlConnection conn = new SqlConnection(cnstr))
                    {
                        conn.Open();
                        using (SqlCommand cmd = conn.CreateCommand())
                        {
                            cmd.CommandType = CommandType.StoredProcedure;
                            cmd.CommandText = "SP_TK";
                            cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "login";
                            cmd.Parameters.Add("@user", SqlDbType.VarChar, 50).Value = gmail;
                            cmd.Parameters.Add("@pass", SqlDbType.VarChar, 50).Value = pass;
                            object result = cmd.ExecuteScalar();
                            json = (string)result;
                        }
                    }
                }
                catch (Exception ex)
                {
                    json = "{\"ok\":0,\"msg\":\"Lỗi rồi: " + ex.Message + "\"}";
                }
                return json;
            }
        }

        public string dangky(string user, string pass, string name,string gmail,string dienthoai)
        {
            string json = "";
            try
            {
                using (SqlConnection conn = new SqlConnection(cnstr))
                {
                    conn.Open();
                    using (SqlCommand cmd = conn.CreateCommand())
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.CommandText = "SP_TK";
                        cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "dangky";
                        cmd.Parameters.Add("@user", SqlDbType.VarChar, 50).Value = user;
                        cmd.Parameters.Add("@pass", SqlDbType.VarChar, 50).Value = pass;
                        cmd.Parameters.Add("@name", SqlDbType.NVarChar, 100).Value = name;
                        cmd.Parameters.Add("@gmail", SqlDbType.VarChar, 50).Value = gmail;
                        cmd.Parameters.Add("@dienthoai", SqlDbType.VarChar, 20).Value = dienthoai;
                        object result = cmd.ExecuteScalar();
                        json = (string)result;
                    }
                }
            }
            catch (Exception ex)
            {
                json = "{\"ok\":0,\"msg\":\"Lỗi rồi: " + ex.Message + "\"}";
            }
            return json;
        }
    }
}
