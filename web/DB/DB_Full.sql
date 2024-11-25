USE [QL_Phong_Gym]
GO
/****** Object:  Table [dbo].[HoiVien]    Script Date: 24/11/2024 01:33:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HoiVien](
	[MaHoiVien] [varchar](50) NOT NULL,
	[TenHoiVien] [nvarchar](100) NULL,
	[SoDienThoai] [varchar](50) NULL,
	[Email] [varchar](50) NULL,
 CONSTRAINT [PK_HoiVien] PRIMARY KEY CLUSTERED 
(
	[MaHoiVien] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[HuongLuyenVien]    Script Date: 24/11/2024 01:33:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HuongLuyenVien](
	[MaHLV] [varchar](50) NOT NULL,
	[TenHLV] [nvarchar](100) NULL,
	[ChuyenMon] [nvarchar](100) NULL,
 CONSTRAINT [PK__HuongLuy__3C9029D8EBB0BF94] PRIMARY KEY CLUSTERED 
(
	[MaHLV] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LichLopHoc]    Script Date: 24/11/2024 01:33:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LichLopHoc](
	[MaLich] [varchar](50) NOT NULL,
	[MaPhong] [varchar](50) NULL,
	[MaLop] [varchar](50) NULL,
	[ThoiGianBatDau] [datetime] NULL,
	[ThoiGianKetThuc] [datetime] NULL,
 CONSTRAINT [PK__LichLopH__728A9AE91BAAD728] PRIMARY KEY CLUSTERED 
(
	[MaLich] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LopHoc]    Script Date: 24/11/2024 01:33:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LopHoc](
	[MaLop] [varchar](50) NOT NULL,
	[TenLop] [nvarchar](100) NULL,
	[MaHLV] [varchar](50) NULL,
 CONSTRAINT [PK__LopHoc__3B98D273A9F28A17] PRIMARY KEY CLUSTERED 
(
	[MaLop] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PhongTap]    Script Date: 24/11/2024 01:33:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PhongTap](
	[MaPhong] [varchar](50) NOT NULL,
	[TenPhong] [nvarchar](100) NULL,
	[DiaChi] [nvarchar](200) NULL,
 CONSTRAINT [PK__PhongTap__20BD5E5B6E2D5AC9] PRIMARY KEY CLUSTERED 
(
	[MaPhong] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TheThanhVien]    Script Date: 24/11/2024 01:33:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TheThanhVien](
	[MaThe] [varchar](50) NOT NULL,
	[MaLich] [varchar](50) NULL,
	[MaHoiVien] [varchar](50) NULL,
	[LoaiThe] [nvarchar](50) NULL,
	[NgayBatDau] [date] NULL,
	[NgayKetThuc] [date] NULL,
	[GiaTien] [decimal](18, 2) NULL,
 CONSTRAINT [PK__TheThanh__314EEAAF266A0606] PRIMARY KEY CLUSTERED 
(
	[MaThe] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TK]    Script Date: 24/11/2024 01:33:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TK](
	[user] [varchar](50) NOT NULL,
	[pass] [varbinary](20) NULL,
	[name] [nvarchar](100) NULL,
	[level] [int] NULL,
	[gmail] [varchar](50) NULL,
	[dienthoai] [varchar](20) NULL,
	[lastLogin] [datetime] NULL,
 CONSTRAINT [PK_TK] PRIMARY KEY CLUSTERED 
(
	[user] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[HoiVien] ([MaHoiVien], [TenHoiVien], [SoDienThoai], [Email]) VALUES (N'HV001', N'Nguyễn Văn A', N'0123456789', N'nguyenvana@example.com')
GO
INSERT [dbo].[HoiVien] ([MaHoiVien], [TenHoiVien], [SoDienThoai], [Email]) VALUES (N'HV002', N'Trần Thị B', N'0987654321', N'tranthib@example.com')
GO
INSERT [dbo].[HoiVien] ([MaHoiVien], [TenHoiVien], [SoDienThoai], [Email]) VALUES (N'HV003', N'Lê Văn C', N'0912345678', N'levanc@example.com')
GO
INSERT [dbo].[HoiVien] ([MaHoiVien], [TenHoiVien], [SoDienThoai], [Email]) VALUES (N'HV004', N'Phạm Thị D', N'0923456789', N'phamthid@example.com')
GO
INSERT [dbo].[HoiVien] ([MaHoiVien], [TenHoiVien], [SoDienThoai], [Email]) VALUES (N'HV005', N'Hoàng Quốc E', N'0934567890', N'hoangquoce@example.com')
GO
INSERT [dbo].[HoiVien] ([MaHoiVien], [TenHoiVien], [SoDienThoai], [Email]) VALUES (N'HV006', N'Lý Hữu F', N'0945678901', N'lyhuuf@example.com')
GO
INSERT [dbo].[HoiVien] ([MaHoiVien], [TenHoiVien], [SoDienThoai], [Email]) VALUES (N'HV007', N'Ngô Gia G', N'0956789012', N'ngogiag@example.com')
GO
INSERT [dbo].[HoiVien] ([MaHoiVien], [TenHoiVien], [SoDienThoai], [Email]) VALUES (N'HV008', N'Phan Nhật H', N'0967890123', N'phannhath@example.com')
GO
INSERT [dbo].[HoiVien] ([MaHoiVien], [TenHoiVien], [SoDienThoai], [Email]) VALUES (N'HV009', N'Dương Minh I', N'0978901234', N'duongminhi@example.com')
GO
INSERT [dbo].[HoiVien] ([MaHoiVien], [TenHoiVien], [SoDienThoai], [Email]) VALUES (N'HV010', N'Tô Hữu K', N'0989012345', N'tohuuk@example.com')
GO
INSERT [dbo].[HuongLuyenVien] ([MaHLV], [TenHLV], [ChuyenMon]) VALUES (N'HLV001', N'Phạm Xuân D', N'Yoga')
GO
INSERT [dbo].[HuongLuyenVien] ([MaHLV], [TenHLV], [ChuyenMon]) VALUES (N'HLV002', N'Hoàng Thị E', N'Pilates')
GO
INSERT [dbo].[HuongLuyenVien] ([MaHLV], [TenHLV], [ChuyenMon]) VALUES (N'HLV003', N'Trịnh Gia F', N'Cardio')
GO
INSERT [dbo].[HuongLuyenVien] ([MaHLV], [TenHLV], [ChuyenMon]) VALUES (N'HLV004', N'Lê Hữu G', N'Kickboxing')
GO
INSERT [dbo].[HuongLuyenVien] ([MaHLV], [TenHLV], [ChuyenMon]) VALUES (N'HLV005', N'Trần Văn H', N'Strength Training')
GO
INSERT [dbo].[HuongLuyenVien] ([MaHLV], [TenHLV], [ChuyenMon]) VALUES (N'HLV006', N'Nguyễn Thị I', N'Aerobics')
GO
INSERT [dbo].[HuongLuyenVien] ([MaHLV], [TenHLV], [ChuyenMon]) VALUES (N'HLV007', N'Phạm Văn J', N'Meditation')
GO
INSERT [dbo].[HuongLuyenVien] ([MaHLV], [TenHLV], [ChuyenMon]) VALUES (N'HLV008', N'Bùi Thị K', N'Dance Fitness')
GO
INSERT [dbo].[HuongLuyenVien] ([MaHLV], [TenHLV], [ChuyenMon]) VALUES (N'HLV009', N'Đinh Hữu L', N'CrossFit')
GO
INSERT [dbo].[HuongLuyenVien] ([MaHLV], [TenHLV], [ChuyenMon]) VALUES (N'HLV010', N'Võ Thị M', N'Zumba')
GO
INSERT [dbo].[LichLopHoc] ([MaLich], [MaPhong], [MaLop], [ThoiGianBatDau], [ThoiGianKetThuc]) VALUES (N'Lich001', N'PT001', N'L001', CAST(N'2024-11-01T06:00:00.000' AS DateTime), CAST(N'2024-11-01T07:30:00.000' AS DateTime))
GO
INSERT [dbo].[LichLopHoc] ([MaLich], [MaPhong], [MaLop], [ThoiGianBatDau], [ThoiGianKetThuc]) VALUES (N'Lich002', N'PT002', N'L002', CAST(N'2024-11-01T08:00:00.000' AS DateTime), CAST(N'2024-11-01T09:30:00.000' AS DateTime))
GO
INSERT [dbo].[LichLopHoc] ([MaLich], [MaPhong], [MaLop], [ThoiGianBatDau], [ThoiGianKetThuc]) VALUES (N'Lich003', N'PT003', N'L003', CAST(N'2024-11-01T10:00:00.000' AS DateTime), CAST(N'2024-11-01T11:30:00.000' AS DateTime))
GO
INSERT [dbo].[LichLopHoc] ([MaLich], [MaPhong], [MaLop], [ThoiGianBatDau], [ThoiGianKetThuc]) VALUES (N'Lich004', N'PT004', N'L004', CAST(N'2024-11-01T12:00:00.000' AS DateTime), CAST(N'2024-11-01T13:30:00.000' AS DateTime))
GO
INSERT [dbo].[LichLopHoc] ([MaLich], [MaPhong], [MaLop], [ThoiGianBatDau], [ThoiGianKetThuc]) VALUES (N'Lich005', N'PT005', N'L005', CAST(N'2024-11-01T14:00:00.000' AS DateTime), CAST(N'2024-11-01T15:30:00.000' AS DateTime))
GO
INSERT [dbo].[LichLopHoc] ([MaLich], [MaPhong], [MaLop], [ThoiGianBatDau], [ThoiGianKetThuc]) VALUES (N'Lich006', N'PT006', N'L006', CAST(N'2024-11-01T16:00:00.000' AS DateTime), CAST(N'2024-11-01T17:30:00.000' AS DateTime))
GO
INSERT [dbo].[LichLopHoc] ([MaLich], [MaPhong], [MaLop], [ThoiGianBatDau], [ThoiGianKetThuc]) VALUES (N'Lich007', N'PT007', N'L007', CAST(N'2024-11-01T18:00:00.000' AS DateTime), CAST(N'2024-11-01T19:30:00.000' AS DateTime))
GO
INSERT [dbo].[LopHoc] ([MaLop], [TenLop], [MaHLV]) VALUES (N'L001', N'Mã huấn luyện viên: HLV001', N'HLV001')
GO
INSERT [dbo].[LopHoc] ([MaLop], [TenLop], [MaHLV]) VALUES (N'L002', N'Lớp Pilates Chiều', N'HLV002')
GO
INSERT [dbo].[LopHoc] ([MaLop], [TenLop], [MaHLV]) VALUES (N'L003', N'Lớp Cardio Tối', N'HLV003')
GO
INSERT [dbo].[LopHoc] ([MaLop], [TenLop], [MaHLV]) VALUES (N'L004', N'Lớp Kickboxing', N'HLV004')
GO
INSERT [dbo].[LopHoc] ([MaLop], [TenLop], [MaHLV]) VALUES (N'L005', N'Lớp Strength Training', N'HLV005')
GO
INSERT [dbo].[LopHoc] ([MaLop], [TenLop], [MaHLV]) VALUES (N'L006', N'Lớp Aerobics', N'HLV006')
GO
INSERT [dbo].[LopHoc] ([MaLop], [TenLop], [MaHLV]) VALUES (N'L007', N'Lớp Meditation', N'HLV007')
GO
INSERT [dbo].[LopHoc] ([MaLop], [TenLop], [MaHLV]) VALUES (N'L008', N'Lớp Dance Fitness', N'HLV008')
GO
INSERT [dbo].[LopHoc] ([MaLop], [TenLop], [MaHLV]) VALUES (N'L009', N'Lớp CrossFit', N'HLV009')
GO
INSERT [dbo].[PhongTap] ([MaPhong], [TenPhong], [DiaChi]) VALUES (N'PT001', N'Phòng Vip', N'123 Đường A, Quận 1')
GO
INSERT [dbo].[PhongTap] ([MaPhong], [TenPhong], [DiaChi]) VALUES (N'PT002', N'Phòng Tập 2', N'456 Đường B, Quận 2')
GO
INSERT [dbo].[PhongTap] ([MaPhong], [TenPhong], [DiaChi]) VALUES (N'PT003', N'Phòng Tập 3', N'789 Đường C, Quận 3')
GO
INSERT [dbo].[PhongTap] ([MaPhong], [TenPhong], [DiaChi]) VALUES (N'PT004', N'Phòng Tập 4', N'101 Đường D, Quận 4')
GO
INSERT [dbo].[PhongTap] ([MaPhong], [TenPhong], [DiaChi]) VALUES (N'PT005', N'Phòng Tập 5', N'202 Đường E, Quận 5')
GO
INSERT [dbo].[PhongTap] ([MaPhong], [TenPhong], [DiaChi]) VALUES (N'PT006', N'Phòng Tập 6', N'303 Đường F, Quận 6')
GO
INSERT [dbo].[PhongTap] ([MaPhong], [TenPhong], [DiaChi]) VALUES (N'PT007', N'Phòng Tập 7', N'404 Đường G, Quận 7')
GO
INSERT [dbo].[PhongTap] ([MaPhong], [TenPhong], [DiaChi]) VALUES (N'PT008', N'Phòng Tập 8', N'505 Đường H, Quận 8')
GO
INSERT [dbo].[PhongTap] ([MaPhong], [TenPhong], [DiaChi]) VALUES (N'PT009', N'Phòng Tập 9', N'606 Đường I, Quận 9')
GO
INSERT [dbo].[PhongTap] ([MaPhong], [TenPhong], [DiaChi]) VALUES (N'PT010', N'Phòng Tập 10', N'707 Đường J, Quận 10')
GO
INSERT [dbo].[TheThanhVien] ([MaThe], [MaLich], [MaHoiVien], [LoaiThe], [NgayBatDau], [NgayKetThuc], [GiaTien]) VALUES (N'TV001', N'Lich001', N'HV001', N'Thẻ Tháng', CAST(N'2024-11-01' AS Date), CAST(N'2024-11-30' AS Date), CAST(500000.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[TheThanhVien] ([MaThe], [MaLich], [MaHoiVien], [LoaiThe], [NgayBatDau], [NgayKetThuc], [GiaTien]) VALUES (N'TV002', N'Lich002', N'HV002', N'Thẻ Năm', CAST(N'2024-01-01' AS Date), CAST(N'2024-12-31' AS Date), CAST(5000000.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[TheThanhVien] ([MaThe], [MaLich], [MaHoiVien], [LoaiThe], [NgayBatDau], [NgayKetThuc], [GiaTien]) VALUES (N'TV003', N'Lich003', N'HV003', N'Thẻ Ngày', CAST(N'2024-11-01' AS Date), CAST(N'2024-11-01' AS Date), CAST(20000.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[TheThanhVien] ([MaThe], [MaLich], [MaHoiVien], [LoaiThe], [NgayBatDau], [NgayKetThuc], [GiaTien]) VALUES (N'TV004', N'Lich004', N'HV004', N'Thẻ Tháng', CAST(N'2024-11-01' AS Date), CAST(N'2024-11-30' AS Date), CAST(500000.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[TheThanhVien] ([MaThe], [MaLich], [MaHoiVien], [LoaiThe], [NgayBatDau], [NgayKetThuc], [GiaTien]) VALUES (N'TV005', N'Lich005', N'HV005', N'Thẻ Năm', CAST(N'2024-01-01' AS Date), CAST(N'2024-12-31' AS Date), CAST(5000000.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[TheThanhVien] ([MaThe], [MaLich], [MaHoiVien], [LoaiThe], [NgayBatDau], [NgayKetThuc], [GiaTien]) VALUES (N'TV006', N'Lich006', N'HV006', N'Thẻ Ngày', CAST(N'2024-11-01' AS Date), CAST(N'2024-11-01' AS Date), CAST(20000.00 AS Decimal(18, 2)))
GO
INSERT [dbo].[TK] ([user], [pass], [name], [level], [gmail], [dienthoai], [lastLogin]) VALUES (N'1', 0x9C1C01DC3AC1445A500251FC34A15D3E75A849DF, N'1', 2, N'1', N'1', CAST(N'2024-11-24T01:32:32.550' AS DateTime))
GO
INSERT [dbo].[TK] ([user], [pass], [name], [level], [gmail], [dienthoai], [lastLogin]) VALUES (N'2', 0xF4F59E822581D785BA910FBF3F268ECA79DB8204, N'2', 1, N'2', N'2', CAST(N'2024-11-24T01:32:24.553' AS DateTime))
GO
ALTER TABLE [dbo].[LichLopHoc]  WITH CHECK ADD  CONSTRAINT [FK__LichLopHo__MaLop__4316F928] FOREIGN KEY([MaLop])
REFERENCES [dbo].[LopHoc] ([MaLop])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[LichLopHoc] CHECK CONSTRAINT [FK__LichLopHo__MaLop__4316F928]
GO
ALTER TABLE [dbo].[LichLopHoc]  WITH CHECK ADD  CONSTRAINT [FK_LichLopHoc_PhongTap] FOREIGN KEY([MaPhong])
REFERENCES [dbo].[PhongTap] ([MaPhong])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[LichLopHoc] CHECK CONSTRAINT [FK_LichLopHoc_PhongTap]
GO
ALTER TABLE [dbo].[LopHoc]  WITH CHECK ADD  CONSTRAINT [FK__LopHoc__MaHLV__403A8C7D] FOREIGN KEY([MaHLV])
REFERENCES [dbo].[HuongLuyenVien] ([MaHLV])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[LopHoc] CHECK CONSTRAINT [FK__LopHoc__MaHLV__403A8C7D]
GO
ALTER TABLE [dbo].[TheThanhVien]  WITH CHECK ADD  CONSTRAINT [FK_TheThanhVien_HoiVien] FOREIGN KEY([MaHoiVien])
REFERENCES [dbo].[HoiVien] ([MaHoiVien])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[TheThanhVien] CHECK CONSTRAINT [FK_TheThanhVien_HoiVien]
GO
ALTER TABLE [dbo].[TheThanhVien]  WITH CHECK ADD  CONSTRAINT [FK_TheThanhVien_LichLopHoc] FOREIGN KEY([MaLich])
REFERENCES [dbo].[LichLopHoc] ([MaLich])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[TheThanhVien] CHECK CONSTRAINT [FK_TheThanhVien_LichLopHoc]
GO
/****** Object:  StoredProcedure [dbo].[SP_TK]    Script Date: 24/11/2024 01:33:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_TK]
    @action VARCHAR(50),
    @user VARCHAR(50) = NULL,
    @name NVARCHAR(100) = NULL,
    @gmail VARCHAR(50) = NULL,
    @dienthoai VARCHAR(20) = NULL,
    @pass VARCHAR(50) = NULL
AS
BEGIN
    BEGIN TRY
        IF (@action = 'dangky')
        BEGIN
            IF EXISTS (SELECT * FROM TK WHERE [user] = @user)
            BEGIN
                SELECT 0 AS ok, N'Tài khoản đã tồn tại' AS message
                FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
                RETURN;
            END

            INSERT INTO TK ([user], [pass], [name], [level], [gmail], [dienthoai], [lastLogin]) 
            VALUES (@user, HASHBYTES('SHA1', @pass), @name, 1, @gmail, @dienthoai, GETDATE());

            SELECT 1 AS ok, N'Đăng ký thành công' AS message 
            FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
        END
        ELSE IF (@action = 'login')
        BEGIN
            IF NOT EXISTS (SELECT * FROM TK WHERE [user] = @user)
            BEGIN
                SELECT 0 AS ok, N'Tài khoản không tồn tại' AS message
                FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
                RETURN;
            END

            IF EXISTS (SELECT * FROM TK WHERE [user] = @user AND [pass] = HASHBYTES('SHA1', @pass))
            BEGIN
                SET NOCOUNT ON;
                SELECT 1 AS ok, N'Login thành công' AS msg, [user], [name], [level], [gmail], [dienthoai], [lastLogin]
                FROM TK
                WHERE [user] = @user 
                FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;

                UPDATE TK SET lastLogin = GETDATE() WHERE [user] = @user;
            END
            ELSE
            BEGIN
                SELECT 0 AS ok, N'Có gì đó sai sai' AS msg 
                FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
            END
        END
    END TRY
    BEGIN CATCH
        SELECT 0 AS ok, ERROR_MESSAGE() AS message
        FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
    END CATCH
END
GO
/****** Object:  StoredProcedure [dbo].[SP_VIP]    Script Date: 24/11/2024 01:33:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_VIP]
    @action varchar(50)= NULL,
	@Loai varchar(50)= NULL,
	@timKiem NVARCHAR(255)= NULL,

    @MaLich varchar(50) = NULL,
    @ThoiGianBatDau datetime = NULL,
    @ThoiGianKetThuc datetime = NULL,

    @MaPhong varchar(50) = NULL,
    @TenPhong nvarchar(100) = NULL,
    @DiaChi nvarchar(100) = NULL,

    @MaLop varchar(50) = NULL,
    @TenLop nvarchar(100) = NULL,

    @MaHLV varchar(50) = NULL,
    @TenHLV nvarchar(100) = NULL,
    @ChuyenMon nvarchar(100) = NULL,

    @MaHoiVien varchar(50) = NULL,
    @TenHoiVien nvarchar(100) = NULL,
    @SoDienThoai varchar(20) = NULL,
	@Email varchar(50) = NULL,

    @MaThe varchar(50) = NULL,
    @LoaiThe nvarchar(100) = NULL,
    @NgayBatDau date = NULL,
    @NgayKetThuc date = NULL,
    @GiaTien decimal(18,2) = NULL
AS
BEGIN
	declare @json nvarchar(max)='';
     IF (@action = 'get_infor')
    BEGIN
        IF (@Loai = 'LichLopHoc')
        BEGIN
            SELECT @json = (
                SELECT 'LichLopHoc' AS type, *
                FROM LichLopHoc
                FOR JSON PATH
            );
        END
        ELSE IF (@Loai = 'PhongTap')
        BEGIN
            SELECT @json = (
                SELECT 'PhongTap' AS type, *
                FROM PhongTap
                FOR JSON PATH
            );
        END
        ELSE IF (@Loai = 'LopHoc')
        BEGIN
            SELECT @json = (
                SELECT 'LopHoc' AS type, *
                FROM LopHoc
                FOR JSON PATH
            );
        END
        ELSE IF (@Loai = 'HuongLuyenVien')
        BEGIN
            SELECT @json = (
                SELECT 'HuongLuyenVien' AS type, *
                FROM HuongLuyenVien
                FOR JSON PATH
            );
        END
        ELSE IF (@Loai = 'HoiVien')
        BEGIN
            SELECT @json = (
                SELECT 'HoiVien' AS type, *
                FROM HoiVien
                FOR JSON PATH
            );
        END
        ELSE IF (@Loai = 'TheThanhVien')
        BEGIN
            SELECT @json = (
                SELECT 'TheThanhVien' AS type, *
                FROM TheThanhVien
                FOR JSON PATH
            );
        END

        SELECT @json AS [json];
    END

    -- Section for 'search' action
    ELSE IF (@action = 'search')
    BEGIN
        IF (@Loai = 'TheThanhVien')
        BEGIN
            SELECT @json = (
                SELECT 'search_thethanhvien' AS status,
                       MaThe, MaLich, MaHoiVien, LoaiThe, NgayBatDau, NgayKetThuc, GiaTien
                FROM TheThanhVien
                WHERE (MaThe LIKE '%' + ISNULL(@timKiem, '') + '%')
                   OR (MaLich LIKE '%' + ISNULL(@timKiem, '') + '%')
                   OR (MaHoiVien LIKE '%' + ISNULL(@timKiem, '') + '%')
                   OR (LoaiThe LIKE '%' + ISNULL(@timKiem, '') + '%')
                   OR (NgayBatDau LIKE '%' + ISNULL(@timKiem, '') + '%')
                   OR (NgayKetThuc LIKE '%' + ISNULL(@timKiem, '') + '%')
                   OR (GiaTien LIKE '%' + ISNULL(@timKiem, '') + '%')
                FOR JSON PATH
            );
        END
        ELSE IF (@Loai = 'HoiVien')
        BEGIN
            SELECT @json = (
                SELECT 'search_hoivien' AS status,
                       MaHoiVien, TenHoiVien, SoDienThoai, Email
                FROM HoiVien
                WHERE (MaHoiVien LIKE '%' + ISNULL(@timKiem, '') + '%')
                   OR (TenHoiVien LIKE '%' + ISNULL(@timKiem, '') + '%')
                   OR (SoDienThoai LIKE '%' + ISNULL(@timKiem, '') + '%')
                   OR (Email LIKE '%' + ISNULL(@timKiem, '') + '%')
                FOR JSON PATH
            );
        END
        ELSE IF (@Loai = 'LopHoc')
        BEGIN
            SELECT @json = (
                SELECT 'search_lophoc' AS status,
                       MaLop, TenLop, MaHLV
                FROM LopHoc
                WHERE (MaLop LIKE '%' + ISNULL(@timKiem, '') + '%')
                   OR (TenLop LIKE '%' + ISNULL(@timKiem, '') + '%')
                   OR (MaHLV LIKE '%' + ISNULL(@timKiem, '') + '%')
                FOR JSON PATH
            );
        END
        ELSE IF (@Loai = 'LichLopHoc')
        BEGIN
            SELECT @json = (
                SELECT 'search_lichlophoc' AS status,
                       MaLich, MaPhong, MaLop, ThoiGianBatDau, ThoiGianKetThuc
                FROM LichLopHoc
                WHERE (MaLich LIKE '%' + ISNULL(@timKiem, '') + '%')
                   OR (MaPhong LIKE '%' + ISNULL(@timKiem, '') + '%')
                   OR (MaLop LIKE '%' + ISNULL(@timKiem, '') + '%')
                   OR (ThoiGianBatDau LIKE '%' + ISNULL(@timKiem, '') + '%')
                   OR (ThoiGianKetThuc LIKE '%' + ISNULL(@timKiem, '') + '%')
                FOR JSON PATH
            );
        END
        ELSE IF (@Loai = 'PhongTap')
        BEGIN
            SELECT @json = (
                SELECT 'search_phongtap' AS status,
                       MaPhong, TenPhong, DiaChi
                FROM PhongTap
                WHERE (MaPhong LIKE '%' + ISNULL(@timKiem, '') + '%')
                   OR (TenPhong LIKE '%' + ISNULL(@timKiem, '') + '%')
                   OR (DiaChi LIKE '%' + ISNULL(@timKiem, '') + '%')
                FOR JSON PATH
            );
        END
        ELSE IF (@Loai = 'HuongLuyenVien')
        BEGIN
            SELECT @json = (
                SELECT 'search_huongluyenvien' AS status,
                       MaHLV, TenHLV, ChuyenMon
                FROM HuongLuyenVien
                WHERE (MaHLV LIKE '%' + ISNULL(@timKiem, '') + '%')
                   OR (TenHLV LIKE '%' + ISNULL(@timKiem, '') + '%')
                   OR (ChuyenMon LIKE '%' + ISNULL(@timKiem, '') + '%')
                FOR JSON PATH
            );
        END

        SELECT @json AS [json];
    END
    IF (@action = 'add_thethanhvien')
    BEGIN
        INSERT INTO TheThanhVien (MaThe, MaHoiVien, MaLich, LoaiThe, NgayBatDau, NgayKetThuc, GiaTien)
        VALUES (@MaThe, @MaHoiVien, @MaLich, @LoaiThe, @NgayBatDau, @NgayKetThuc, @GiaTien);
        SELECT '1' AS ok, 'Thêm thành công' AS message FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
    END
    ELSE IF (@action = 'update_thethanhvien')
    BEGIN
        UPDATE TheThanhVien
        SET MaHoiVien = @MaHoiVien, MaLich = @MaLich, LoaiThe = @LoaiThe,
            NgayBatDau = @NgayBatDau, NgayKetThuc = @NgayKetThuc, GiaTien = @GiaTien
        WHERE MaThe = @MaThe;
        SELECT '1' AS ok, 'Cập nhật thành công' AS message FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
    END
    ELSE IF (@action = 'delete_thethanhvien')
    BEGIN
        DELETE FROM TheThanhVien WHERE MaThe = @MaThe;
        SELECT '1' AS ok, 'Xóa thành công' AS message FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
    END

    ELSE IF (@action = 'add_phongtap')
    BEGIN
        INSERT INTO PhongTap (MaPhong, TenPhong, DiaChi)
        VALUES (@MaPhong, @TenPhong, @DiaChi);
        SELECT '1' AS ok, 'Thêm thành công' AS message FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
    END
    ELSE IF (@action = 'update_phongtap')
    BEGIN
        UPDATE PhongTap
        SET TenPhong = @TenPhong, DiaChi = @DiaChi
        WHERE MaPhong = @MaPhong;
        SELECT '1' AS ok, 'Cập nhật thành công' AS message FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
    END
    ELSE IF (@action = 'delete_phongtap')
    BEGIN
        DELETE FROM PhongTap WHERE MaPhong = @MaPhong;
        SELECT '1' AS ok, 'Xóa thành công' AS message FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
    END

    ELSE IF (@action = 'add_hoivien')
    BEGIN
        INSERT INTO HoiVien (MaHoiVien, TenHoiVien, SoDienThoai,Email)
        VALUES (@MaHoiVien, @TenHoiVien, @SoDienThoai,@Email);
        SELECT '1' AS ok, 'Thêm thành công' AS message FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
    END
    ELSE IF (@action = 'update_hoivien')
    BEGIN
        UPDATE HoiVien
        SET TenHoiVien = @TenHoiVien, SoDienThoai = @SoDienThoai, Email = @Email
        WHERE MaHoiVien = @MaHoiVien;
        SELECT '1' AS ok, 'Cập nhật thành công' AS message FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
    END
    ELSE IF (@action = 'delete_hoivien')
    BEGIN
        DELETE FROM HoiVien WHERE MaHoiVien = @MaHoiVien;
        SELECT '1' AS ok, 'Xóa thành công' AS message FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
    END

    ELSE IF (@action = 'add_huongluyenvien')
    BEGIN
        INSERT INTO HuongLuyenVien (MaHLV, TenHLV, ChuyenMon)
        VALUES (@MaHLV, @TenHLV, @ChuyenMon);
        SELECT '1' AS ok, 'Thêm thành công' AS message FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
    END
    ELSE IF (@action = 'update_huongluyenvien')
    BEGIN
        UPDATE HuongLuyenVien
        SET TenHLV = @TenHLV, ChuyenMon = @ChuyenMon
        WHERE MaHLV = @MaHLV;
        SELECT '1' AS ok, 'Cập nhật thành công' AS message FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
    END
    ELSE IF (@action = 'delete_huongluyenvien')
    BEGIN
        DELETE FROM HuongLuyenVien WHERE MaHLV = @MaHLV;
        SELECT '1' AS ok, 'Xóa thành công' AS message FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
    END

    ELSE IF (@action = 'add_lophoc')
    BEGIN
        INSERT INTO LopHoc (MaLop, TenLop,MaHLV)
        VALUES (@MaLop, @TenLop ,@MaHLV);
        SELECT '1' AS ok, 'Thêm thành công' AS message FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
    END
    ELSE IF (@action = 'update_lophoc')
    BEGIN
        UPDATE LopHoc
        SET TenLop = @TenLop
        WHERE MaLop = @MaLop;
        SELECT '1' AS ok, 'Cập nhật thành công' AS message FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
    END
    ELSE IF (@action = 'delete_lophoc')
    BEGIN
        DELETE FROM LopHoc WHERE MaLop = @MaLop;
        SELECT '1' AS ok, 'Xóa thành công' AS message FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
    END

    ELSE IF (@action = 'add_lichlophoc')
    BEGIN
        INSERT INTO LichLopHoc (MaLich, ThoiGianBatDau, ThoiGianKetThuc, MaLop, MaPhong)
        VALUES (@MaLich, @ThoiGianBatDau, @ThoiGianKetThuc, @MaLop, @MaPhong);
        SELECT '1' AS ok, 'Thêm thành công' AS message FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
    END
    ELSE IF (@action = 'update_lichlophoc')
    BEGIN
        UPDATE LichLopHoc
        SET ThoiGianBatDau = @ThoiGianBatDau, ThoiGianKetThuc = @ThoiGianKetThuc,
            MaLop = @MaLop, MaPhong = @MaPhong
        WHERE MaLich = @MaLich;
        SELECT '1' AS ok, 'Cập nhật thành công' AS message FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
    END
    ELSE IF (@action = 'delete_lichlophoc')
    BEGIN
        DELETE FROM LichLopHoc WHERE MaLich = @MaLich;
        SELECT '1' AS ok, 'Xóa thành công' AS message FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
    END
END
GO
