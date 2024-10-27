USE [QL_Phong_Gim_Manh]
GO
/****** Object:  Table [dbo].[HoiVien]    Script Date: 26/10/2024 13:29:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HoiVien](
	[MaHoiVien] [varchar](50) NOT NULL,
	[TenHoiVien] [nvarchar](100) NULL,
	[SoDienThoai] [nvarchar](20) NULL,
	[Email] [nvarchar](100) NULL,
 CONSTRAINT [PK_HoiVien] PRIMARY KEY CLUSTERED 
(
	[MaHoiVien] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[HuongLuyenVien]    Script Date: 26/10/2024 13:29:58 ******/
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
/****** Object:  Table [dbo].[LichLopHoc]    Script Date: 26/10/2024 13:29:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LichLopHoc](
	[MaLich] [varchar](50) NOT NULL,
	[Maphong] [varchar](50) NULL,
	[MaLop] [varchar](50) NULL,
	[ThoiGianBatDau] [datetime] NULL,
	[ThoiGianKetThuc] [datetime] NULL,
 CONSTRAINT [PK__LichLopH__728A9AE91BAAD728] PRIMARY KEY CLUSTERED 
(
	[MaLich] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LopHoc]    Script Date: 26/10/2024 13:29:58 ******/
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
/****** Object:  Table [dbo].[PhongTap]    Script Date: 26/10/2024 13:29:58 ******/
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
/****** Object:  Table [dbo].[TheThanhVien]    Script Date: 26/10/2024 13:29:58 ******/
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
INSERT [dbo].[LichLopHoc] ([MaLich], [Maphong], [MaLop], [ThoiGianBatDau], [ThoiGianKetThuc]) VALUES (N'Lich001', N'PT001', N'L001', CAST(N'2024-11-01T06:00:00.000' AS DateTime), CAST(N'2024-11-01T07:30:00.000' AS DateTime))
GO
INSERT [dbo].[LichLopHoc] ([MaLich], [Maphong], [MaLop], [ThoiGianBatDau], [ThoiGianKetThuc]) VALUES (N'Lich002', N'PT002', N'L002', CAST(N'2024-11-01T08:00:00.000' AS DateTime), CAST(N'2024-11-01T09:30:00.000' AS DateTime))
GO
INSERT [dbo].[LichLopHoc] ([MaLich], [Maphong], [MaLop], [ThoiGianBatDau], [ThoiGianKetThuc]) VALUES (N'Lich003', N'PT003', N'L003', CAST(N'2024-11-01T10:00:00.000' AS DateTime), CAST(N'2024-11-01T11:30:00.000' AS DateTime))
GO
INSERT [dbo].[LichLopHoc] ([MaLich], [Maphong], [MaLop], [ThoiGianBatDau], [ThoiGianKetThuc]) VALUES (N'Lich004', N'PT004', N'L004', CAST(N'2024-11-01T12:00:00.000' AS DateTime), CAST(N'2024-11-01T13:30:00.000' AS DateTime))
GO
INSERT [dbo].[LichLopHoc] ([MaLich], [Maphong], [MaLop], [ThoiGianBatDau], [ThoiGianKetThuc]) VALUES (N'Lich005', N'PT005', N'L005', CAST(N'2024-11-01T14:00:00.000' AS DateTime), CAST(N'2024-11-01T15:30:00.000' AS DateTime))
GO
INSERT [dbo].[LichLopHoc] ([MaLich], [Maphong], [MaLop], [ThoiGianBatDau], [ThoiGianKetThuc]) VALUES (N'Lich006', N'PT006', N'L006', CAST(N'2024-11-01T16:00:00.000' AS DateTime), CAST(N'2024-11-01T17:30:00.000' AS DateTime))
GO
INSERT [dbo].[LichLopHoc] ([MaLich], [Maphong], [MaLop], [ThoiGianBatDau], [ThoiGianKetThuc]) VALUES (N'Lich007', N'PT007', N'L007', CAST(N'2024-11-01T18:00:00.000' AS DateTime), CAST(N'2024-11-01T19:30:00.000' AS DateTime))
GO
INSERT [dbo].[LopHoc] ([MaLop], [TenLop], [MaHLV]) VALUES (N'L001', N'Lớp Yoga Sáng', N'HLV001')
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
INSERT [dbo].[TheThanhVien] ([MaThe], [MaLich], [MaHoiVien], [LoaiThe], [NgayBatDau], [NgayKetThuc], [GiaTien]) VALUES (N'TV007', N'Lich007', N'HV007', N'Thẻ Tháng', CAST(N'2024-11-01' AS Date), CAST(N'2024-11-30' AS Date), CAST(500000.00 AS Decimal(18, 2)))
GO
ALTER TABLE [dbo].[LichLopHoc]  WITH CHECK ADD  CONSTRAINT [FK__LichLopHo__MaLop__4316F928] FOREIGN KEY([MaLop])
REFERENCES [dbo].[LopHoc] ([MaLop])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[LichLopHoc] CHECK CONSTRAINT [FK__LichLopHo__MaLop__4316F928]
GO
ALTER TABLE [dbo].[LichLopHoc]  WITH CHECK ADD  CONSTRAINT [FK_LichLopHoc_PhongTap] FOREIGN KEY([Maphong])
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
/****** Object:  StoredProcedure [dbo].[SP_VIP]    Script Date: 26/10/2024 13:29:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[SP_VIP] 
	@action varchar(50),

	@MaLich varchar(50) = NULL,
	@ThoiGianBatDau datetime = null,
	@ThoiGianKetThuc datetime = null,

    @MaPhong varchar(50) = NULL,
    @TenPhong nvarchar(100) = NULL,
	@DiaChi nvarchar(100) = NULL,

	@MaLop varchar(50) = NULL,
    @TenLop nvarchar(100) = NULL,

	@MaHLV varchar(50) = NULL,
    @TenHLV nvarchar(100) = NULL,
	@ChuyenMon nvarchar(100) = NULL
AS
BEGIN
	declare @json nvarchar(max)='';
    IF (@action = 'get_infor')
    BEGIN        
		SELECT @json = (
			SELECT
				'get_infor' AS status,
				LichLopHoc.MaLich,
				LichLopHoc.ThoiGianBatDau,
				LichLopHoc.ThoiGianKetThuc,
				PhongTap.MaPhong,
				PhongTap.TenPhong,
				PhongTap.DiaChi,
				LopHoc.MaLop,
				LopHoc.TenLop,
				HuongLuyenVien.MaHLV,
				HuongLuyenVien.TenHLV,
				HuongLuyenVien.ChuyenMon
			FROM 
				LichLopHoc
			JOIN 
				PhongTap ON LichLopHoc.MaPhong = PhongTap.MaPhong
			JOIN 
				LopHoc ON LichLopHoc.MaLop = LopHoc.MaLop
			JOIN 
				HuongLuyenVien ON LopHoc.MaHLV = HuongLuyenVien.MaHLV
			FOR JSON PATH
		);

		SELECT @json AS [json];

    END


    ELSE IF (@action = 'update_phongtap')
    BEGIN
        UPDATE PhongTap
        SET TenPhong = @TenPhong,DiaChi=@DiaChi
        WHERE MaPhong = @MaPhong
        SELECT 'ok' AS ok,'Cập nhật thành công' AS message FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
    END

	ELSE IF (@action = 'update_huongluyenvien')
    BEGIN
        UPDATE HuongLuyenVien
        SET TenHLV = @TenHLV,ChuyenMon=@ChuyenMon
        WHERE MaHLV = @MaHLV
        SELECT 'ok' AS ok,'Cập nhật thành công' AS message FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
    END

	ELSE IF (@action = 'update_LopHoc')
    BEGIN
        UPDATE LopHoc
        SET TenLop = @TenLop,MaHLV=@MaHLV
        WHERE MaLop = @MaLop
        SELECT 'ok' AS ok,'Cập nhật thành công' AS message FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
    END

	ELSE IF (@action = 'update_lichlophoc')
    BEGIN
        UPDATE LichLopHoc
        SET Maphong = @Maphong,MaLop=@MaLop,ThoiGianBatDau = @ThoiGianBatDau , ThoiGianKetThuc = @ThoiGianKetThuc
        WHERE MaLich = @MaLich
        SELECT 'ok' AS ok,'Cập nhật thành công' AS message FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
    END


    ELSE IF (@action = 'delete_phongtap')
    BEGIN
        DELETE FROM PhongTap
        WHERE MaPhong = @MaPhong
        SELECT 'ok' AS ok,'Xóa thành công' AS message FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
    END

	ELSE IF (@action = 'delete_huongluyenvien')
    BEGIN
        DELETE FROM HuongLuyenVien
        WHERE MaHLV = @MaHLV
        SELECT 'ok' AS ok,'Xóa thành công' AS message FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
    END

	ELSE IF (@action = 'delete_LopHoc')
    BEGIN
        DELETE FROM LopHoc
        WHERE MaLop = @MaLop
        SELECT 'ok' AS ok,'Xóa thành công' AS message FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
    END

	ELSE IF (@action = 'delete_lichlophoc')
    BEGIN
        DELETE FROM LichLopHoc
        WHERE MaLich = @MaLich
        SELECT 'ok' AS ok,'Xóa thành công' AS message FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
    END

	ELSE IF (@action = 'add_phongtap')
    BEGIN
        INSERT INTO PhongTap(MaPhong,TenPhong,DiaChi)
        VALUES (@MaPhong,@TenPhong,@DiaChi)
        SELECT 'ok' AS ok,'Thêm thành công' AS message FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
    END

	ELSE IF (@action = 'add_huongluyenvien')
    BEGIN
        INSERT INTO HuongLuyenVien(MaHLV,TenHLV,ChuyenMon)
        VALUES (@MaHLV,@TenHLV,@ChuyenMon)
        SELECT 'ok' AS ok,'Thêm thành công' AS message FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
    END

	ELSE IF (@action = 'add_LopHoc')
    BEGIN
        INSERT INTO LopHoc(MaLop,TenLop,MaHLV)
        VALUES (@MaLop,@TenLop,@MaHLV)
        SELECT 'ok' AS ok,'Thêm thành công' AS message FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
    END

	ELSE IF (@action = 'add_lichlophoc')
    BEGIN
        INSERT INTO LichLopHoc(MaLich,MaPhong,MaLop,ThoiGianBatDau,ThoiGianKetThuc)
        VALUES (@MaLich,@MaPhong,@MaLop,@ThoiGianBatDau,@ThoiGianKetThuc)
        SELECT 'ok' AS ok,'Thêm thành công' AS message FOR JSON PATH, WITHOUT_ARRAY_WRAPPER;
    END
END


GO
