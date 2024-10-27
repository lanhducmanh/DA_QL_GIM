using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Text;

namespace Lib
{
    public class Read_DB
    {
        public string cnstr;
        public string get_infor()
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


        public string update_phongtap(string MaPhong ,string TenPhong, string DiaChi)
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
                        cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "update_phongtap";
                        cmd.Parameters.Add("@MaPhong", SqlDbType.VarChar,50).Value = MaPhong;
                        cmd.Parameters.Add("@TenPhong", SqlDbType.NVarChar,100).Value = TenPhong;
                        cmd.Parameters.Add("@DiaChi", SqlDbType.NVarChar,200).Value = DiaChi;
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
        public string update_huongluyenvien(string MaHLV, string TenHLV, string ChuyenMon)
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
                        cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "update_huongluyenvien";
                        cmd.Parameters.Add("@MaHLV", SqlDbType.VarChar, 50).Value = MaHLV;
                        cmd.Parameters.Add("@TenHLV", SqlDbType.NVarChar, 100).Value = TenHLV;
                        cmd.Parameters.Add("@ChuyenMon", SqlDbType.NVarChar, 100).Value = ChuyenMon;
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
        public string update_LopHoc(string MaLop, string TenLop, string MaHLV)
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
                        cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "update_LopHoc";
                        cmd.Parameters.Add("@MaLop", SqlDbType.VarChar, 50).Value = MaLop;
                        cmd.Parameters.Add("@TenLop", SqlDbType.NVarChar, 100).Value = TenLop;
                        cmd.Parameters.Add("@MaHLV", SqlDbType.VarChar, 50).Value = MaHLV;
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
        public string update_lichlophoc(string MaLich ,string Maphong, string MaLop,string ThoiGianBatDau, string ThoiGianKetThuc)
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
                        cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "update_lichlophoc";
                        cmd.Parameters.Add("@MaLich", SqlDbType.VarChar, 50).Value = MaLich;
                        cmd.Parameters.Add("@Maphong", SqlDbType.VarChar, 50).Value = Maphong;
                        cmd.Parameters.Add("@MaLop", SqlDbType.VarChar, 50).Value = MaLop;
                        cmd.Parameters.Add("@ThoiGianBatDau", SqlDbType.DateTime).Value = DateTime.TryParse(ThoiGianBatDau, out var start) ? (object)start : DBNull.Value;
                        cmd.Parameters.Add("@ThoiGianKetThuc", SqlDbType.DateTime).Value = DateTime.TryParse(ThoiGianKetThuc, out var end) ? (object)end : DBNull.Value;
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
                    using (SqlCommand cmd = conn.CreateCommand())
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.CommandText = "SP_VIP";
                        cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "add_phongtap";
                        cmd.Parameters.Add("@MaPhong", SqlDbType.VarChar, 50).Value = MaPhong;
                        cmd.Parameters.Add("@TenPhong", SqlDbType.NVarChar, 100).Value = TenPhong;
                        cmd.Parameters.Add("@DiaChi", SqlDbType.NVarChar, 200).Value = DiaChi;
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
        public string add_huongluyenvien(string MaHLV, string TenHLV, string ChuyenMon)
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
                        cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "add_huongluyenvien";
                        cmd.Parameters.Add("@MaHLV", SqlDbType.VarChar, 50).Value = MaHLV;
                        cmd.Parameters.Add("@TenHLV", SqlDbType.NVarChar, 100).Value = TenHLV;
                        cmd.Parameters.Add("@ChuyenMon", SqlDbType.NVarChar, 100).Value = ChuyenMon;
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
        public string add_LopHoc(string MaLop, string TenLop, string MaHLV)
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
                        cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "add_LopHoc";
                        cmd.Parameters.Add("@MaLop", SqlDbType.VarChar, 50).Value = MaLop;
                        cmd.Parameters.Add("@TenLop", SqlDbType.NVarChar, 100).Value = TenLop;
                        cmd.Parameters.Add("@MaHLV", SqlDbType.VarChar, 50).Value = MaHLV;
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
        public string add_lichlophoc(string MaLich, string Maphong, string MaLop, string ThoiGianBatDau, string ThoiGianKetThuc)
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
                        cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "add_lichlophoc";
                        cmd.Parameters.Add("@MaLich", SqlDbType.VarChar, 50).Value = MaLich;
                        cmd.Parameters.Add("@Maphong", SqlDbType.VarChar, 50).Value = Maphong;
                        cmd.Parameters.Add("@MaLop", SqlDbType.VarChar, 50).Value = MaLop;
                        cmd.Parameters.Add("@ThoiGianBatDau", SqlDbType.DateTime).Value = DateTime.TryParse(ThoiGianBatDau, out var start) ? (object)start : DBNull.Value;
                        cmd.Parameters.Add("@ThoiGianKetThuc", SqlDbType.DateTime).Value = DateTime.TryParse(ThoiGianKetThuc, out var end) ? (object)end : DBNull.Value;
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

        public string delete_phongtap(string MaPhong)
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
                        cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "delete_phongtap";
                        cmd.Parameters.Add("@MaPhong", SqlDbType.VarChar, 50).Value = MaPhong;
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
        public string delete_huongluyenvien(string MaHLV)
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
                        cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "delete_huongluyenvien";
                        cmd.Parameters.Add("@MaHLV", SqlDbType.VarChar, 50).Value = MaHLV;
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
        public string delete_LopHoc(string MaLop)
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
                        cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "delete_LopHoc";
                        cmd.Parameters.Add("@MaLop", SqlDbType.VarChar, 50).Value = MaLop;
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
        public string delete_lichlophoc(string MaLich)
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
                        cmd.Parameters.Add("@action", SqlDbType.VarChar, 50).Value = "delete_lichlophoc";
                        cmd.Parameters.Add("@MaLich", SqlDbType.VarChar, 50).Value = MaLich;
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
