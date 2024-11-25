$(document).ready(function () {
    checklogin();

    $(document).on("click", ".nav-link", function () {
        const section = $(this).attr("id");
        switch (section) {
            case "home":
                home();
                break;
            case "TheThanhVien":
                TheThanhVien();  
                break;
            case "LichLopHoc":
                loadLichLopHoc();
                break;
            case "LopHoc":
                loadLopHoc();
                break;
            case "HoiVien":
                loadHoiVien();
                break;
            case "HuongLuyenVien":
                loadHuongLuyenVien();
                break;
            case "PhongTap":
                loadPhongTap();
                break;
        }
    });

    function TheThanhVien() {
        var container = $(".noidung");
        var btnContainer = $(".add");
        var search = $(".search");
        container.empty();
        btnContainer.empty();
        search.empty();
        search.append(`                    
            <input type="text" id="searchInput" class="form-control" placeholder="Nhập từ khóa tìm kiếm..." style="width: auto; display: inline-block;" />
            <button class="btn btn-primary" onclick="searchTheThanhVien()">Tìm kiếm</button>`);

        btnContainer.append('<button type="button" onclick="them_thethanhvien()">Thêm Thẻ Thành Viên</button>');
        container.append('<div>Đang tải dữ liệu...</div>');

        $.post('SP_API.aspx', { action: 'get_infor', Loai: 'TheThanhVien' }, function (data) {
            container.empty();

            if (data.length > 0) {
                data.forEach(record => {
                    var theThanhVienDiv = $(`<div class='info' id='thethanhvien-${record.MaThe}'></div>`);
                    theThanhVienDiv.append($("<div class='ma-the'></div>").text("Mã thẻ: " + record.MaThe));
                    theThanhVienDiv.append($("<div class='ma-hoivien'></div>").text("Mã hội viên: " + record.MaHoiVien));
                    theThanhVienDiv.append($("<div class='ma-lich'></div>").text("Mã lịch: " + record.MaLich));
                    theThanhVienDiv.append($("<div class='loai-the'></div>").text("Loại thẻ: " + record.LoaiThe));
                    theThanhVienDiv.append($("<div class='ngay-batdau'></div>").text("Ngày bắt đầu: " + record.NgayBatDau));
                    theThanhVienDiv.append($("<div class='ngay-ketthuc'></div>").text("Ngày kết thúc: " + record.NgayKetThuc));
                    theThanhVienDiv.append($("<div class='gia-tien'></div>").text("Giá tiền: " + record.GiaTien));
                    theThanhVienDiv.append(`<button type="button" class="sua-btn" onclick="sua_thethanhvien('${record.MaThe}', this)">Sửa</button>
                                        <button type="button" class="xoa-btn" onclick="xoa_thethanhvien('${record.MaThe}', this)">Xóa</button>`);
                    container.append(theThanhVienDiv);
                    checklogin();
                });
            } else {
                container.append('<div>Không có dữ liệu nào.</div>');
            }

        }, 'json');
    }
    window.searchTheThanhVien = function () { 
        var searchInput = $("#searchInput").val();
        var container = $(".noidung");
        container.empty();
        container.append('<div>Đang tìm kiếm...</div>');

        $.post('SP_API.aspx', { action: 'search', Loai: 'TheThanhVien', timKiem: searchInput }, function (data) {
            container.empty();

            if (data.length > 0) {
                data.forEach(record => {
                    var theThanhVienDiv = $(`<div class='info' id='thethanhvien-${record.MaThe}'></div>`);
                    theThanhVienDiv.append($("<div class='ma-the'></div>").text("Mã thẻ: " + record.MaThe));
                    theThanhVienDiv.append($("<div class='ma-hoivien'></div>").text("Mã hội viên: " + record.MaHoiVien));
                    theThanhVienDiv.append($("<div class='ma-lich'></div>").text("Mã lịch: " + record.MaLich));
                    theThanhVienDiv.append($("<div class='loai-the'></div>").text("Loại thẻ: " + record.LoaiThe));
                    theThanhVienDiv.append($("<div class='ngay-batdau'></div>").text("Ngày bắt đầu: " + record.NgayBatDau));
                    theThanhVienDiv.append($("<div class='ngay-ketthuc'></div>").text("Ngày kết thúc: " + record.NgayKetThuc));
                    theThanhVienDiv.append($("<div class='gia-tien'></div>").text("Giá tiền: " + record.GiaTien));
                    theThanhVienDiv.append(`<button type="button" class="sua-btn" onclick="sua_thethanhvien('${record.MaThe}', this)">Sửa</button>
                                    <button type="button" class="xoa-btn" onclick="xoa_thethanhvien('${record.MaThe}', this)">Xóa</button>`);
                    container.append(theThanhVienDiv);
                    checklogin();
                });
            } else {
                container.append('<div>Không có dữ liệu nào phù hợp.</div>');
            }

        }, 'json');
    }
    window.them_thethanhvien = function () { 
        var html = `
        <form id="addTheForm">
            <div class="mb-3">
                <label for="maTheInput" class="form-label">Mã Thẻ</label>
                <input type="text" class="form-control" id="maTheInput" required>
            </div>
            <div class="mb-3">
                <label for="maHoiVienInput" class="form-label">Mã Hội Viên</label>
                <input type="text" class="form-control" id="maHoiVienInput" required>
            </div>
            <div class="mb-3">
                <label for="maLichInput" class="form-label">Mã Lịch</label>
                <input type="text" class="form-control" id="maLichInput" required>
            </div>
            <div class="mb-3">
                <label for="loaiTheInput" class="form-label">Loại Thẻ</label>
                <input type="text" class="form-control" id="loaiTheInput" required>
            </div>
            <div class="mb-3">
                <label for="ngayBatDauInput" class="form-label">Ngày Bắt Đầu</label>
                <input type="date" class="form-control" id="ngayBatDauInput" required>
            </div>
            <div class="mb-3">
                <label for="ngayKetThucInput" class="form-label">Ngày Kết Thúc</label>
                <input type="date" class="form-control" id="ngayKetThucInput" required>
            </div>
            <div class="mb-3">
                <label for="giaTienInput" class="form-label">Giá Tiền</label>
                <input type="number" class="form-control" id="giaTienInput" required>
            </div>
        </form>
    `;

        $.confirm({
            title: 'Thêm Thẻ Thành Viên Mới',
            content: html,
            buttons: {
                add: {
                    text: 'Thêm',
                    btnClass: 'btn-primary',
                    action: function () {
                        var newTheData = {
                            action: 'add_thethanhvien',
                            MaThe: $('#maTheInput').val(),
                            MaHoiVien: $('#maHoiVienInput').val(),
                            MaLich: $('#maLichInput').val(),
                            LoaiThe: $('#loaiTheInput').val(),
                            NgayBatDau: $('#ngayBatDauInput').val(),
                            NgayKetThuc: $('#ngayKetThucInput').val(),
                            GiaTien: $('#giaTienInput').val()
                        };

                        $.post('SP_API.aspx', newTheData, function (data) {
                            if (data.ok) {
                                $.alert('Thêm thẻ thành công');
                                TheThanhVien(); 
                            } else {
                                $.alert('Thêm thẻ thất bại');
                            }
                        }, 'json');
                    }
                },
                cancel: {
                    text: 'Hủy',
                    btnClass: 'btn-secondary'
                }
            }
        });
    }
    window.sua_thethanhvien = function (maThe, button) {
        var theThanhVienDiv = $(button).closest(`#thethanhvien-${maThe}`);
        var currentMaThe = theThanhVienDiv.find('.ma-the').text().replace("Mã thẻ: ", "").trim();
        var currentMaHoiVien = theThanhVienDiv.find('.ma-hoivien').text().replace("Mã hội viên: ", "").trim();
        var currentMaLich = theThanhVienDiv.find('.ma-lich').text().replace("Mã lịch: ", "").trim();
        var currentLoaiThe = theThanhVienDiv.find('.loai-the').text().replace("Loại thẻ: ", "").trim();
        var currentNgayBatDau = theThanhVienDiv.find('.ngay-batdau').text().replace("Ngày bắt đầu: ", "").trim();
        var currentNgayKetThuc = theThanhVienDiv.find('.ngay-ketthuc').text().replace("Ngày kết thúc: ", "").trim();
        var currentGiaTien = theThanhVienDiv.find('.gia-tien').text().replace("Giá tiền: ", "").trim();

        var html = `
    <form id="editTheForm">
        <div class="mb-3">
            <label for="maHoiVienEdit" class="form-label">Mã Thẻ : ${currentMaThe}</label>
        </div> 
        <div class="mb-3">
            <label for="maHoiVienEdit" class="form-label">Mã Hội Viên</label>
            <input type="text" class="form-control" id="maHoiVienEdit" value="${currentMaHoiVien}">
        </div>
        <div class="mb-3">
            <label for="maLichEdit" class="form-label">Mã Lịch</label>
            <input type="text" class="form-control" id="maLichEdit" value="${currentMaLich}">
        </div>
        <div class="mb-3">
            <label for="loaiTheEdit" class="form-label">Loại Thẻ</label>
            <input type="text" class="form-control" id="loaiTheEdit" value="${currentLoaiThe}">
        </div>
        <div class="mb-3">
            <label for="ngayBatDauEdit" class="form-label">Ngày Bắt Đầu</label>
            <input type="date" class="form-control" id="ngayBatDauEdit" value="${currentNgayBatDau}">
        </div>
        <div class="mb-3">
            <label for="ngayKetThucEdit" class="form-label">Ngày Kết Thúc</label>
            <input type="date" class="form-control" id="ngayKetThucEdit" value="${currentNgayKetThuc}">
        </div>
        <div class="mb-3">
            <label for="giaTienEdit" class="form-label">Giá Tiền</label>
            <input type="number" class="form-control" id="giaTienEdit" value="${currentGiaTien}">
        </div>
    </form>
    `;

        $.confirm({
            title: 'Chỉnh Sửa Thẻ Thành Viên',
            content: html,
            buttons: {
                save: {
                    text: 'Lưu',
                    btnClass: 'btn-primary',
                    action: function () {
                        var updatedData = {
                            action: 'update_thethanhvien',
                            MaThe: maThe,
                            MaHoiVien: $('#maHoiVienEdit').val(),
                            MaLich: $('#maLichEdit').val(),
                            LoaiThe: $('#loaiTheEdit').val(),
                            NgayBatDau: $('#ngayBatDauEdit').val(),
                            NgayKetThuc: $('#ngayKetThucEdit').val(),
                            GiaTien: $('#giaTienEdit').val()
                        };

                        $.post('SP_API.aspx', updatedData, function (data) {
                            if (data.ok) {
                                $.alert('Chỉnh sửa thành công');
                                TheThanhVien();
                            } else {
                                $.alert('Chỉnh sửa thất bại');
                            }
                        }, 'json');
                    }
                },
                cancel: {
                    text: 'Hủy',
                    btnClass: 'btn-secondary'
                }
            }
        });
    };
    window.xoa_thethanhvien = function (maThe, button) {
        $.confirm({
            title: 'Xác Nhận Xóa',
            content: `Bạn có chắc muốn xóa thẻ thành viên có mã: ${maThe}?`,
            buttons: {
                confirm: {
                    text: 'Xóa',
                    btnClass: 'btn-danger',
                    action: function () {
                        $.post('SP_API.aspx', { action: 'delete_thethanhvien', MaThe: maThe }, function (data) {
                            if (data.ok) {
                                $.alert('Xóa thành công');
                                TheThanhVien();
                            } else {
                                $.alert('Xóa thất bại');
                            }
                        }, 'json');
                    }
                },
                cancel: {
                    text: 'Hủy',
                    btnClass: 'btn-secondary'
                }
            }
        });
    };

    function loadHoiVien() {
        var container = $(".noidung");
        var btnContainer = $(".add");
        var search = $(".search");
        container.empty();
        btnContainer.empty();
        search.empty();
        search.append(`                    
            <input type="text" id="searchInput" class="form-control" placeholder="Nhập từ khóa tìm kiếm..." style="width: auto; display: inline-block;" />
            <button class="btn btn-primary" onclick="searchHoiVien()">Tìm kiếm</button>`);

        btnContainer.append('<button type="button" onclick="them_hoivien()">Thêm Thẻ Thành Viên</button>');
        container.append('<div>Đang tải dữ liệu...</div>');

        $.post('SP_API.aspx', { action: 'get_infor', Loai: 'HoiVien' }, function (data) {
            container.empty();
            if (data.length > 0) {
                data.forEach(record => {
                    var hoiVienDiv = $(`<div class='info' id='hoivien-${record.MaHoiVien}'></div>`);
                    hoiVienDiv.append($("<div class='ma-hoivien'></div>").text("Mã Hội Viên: " + record.MaHoiVien));
                    hoiVienDiv.append($("<div class='ten-hoivien'></div>").text("Tên hội viên: " + record.TenHoiVien));
                    hoiVienDiv.append($("<div class='so-dienthoai'></div>").text("Số điện thoại: " + record.SoDienThoai));
                    hoiVienDiv.append($("<div class='email'></div>").text("Email: " + record.Email));
                    hoiVienDiv.append(`<button type="button" class="sua-btn" onclick="sua_hoivien('${record.MaHoiVien}', this)">Sửa</button>
                                        <button type="button" class="xoa-btn" onclick="xoa_hoivien('${record.MaHoiVien}', this)">Xóa</button>`);
                    container.append(hoiVienDiv);
                    checklogin();
                });
            } else {
                container.append('<div>Không có dữ liệu nào.</div>');
            }
        }, 'json');
    }
    window.searchHoiVien = function () { 
        var keyword = $("#searchInput").val();
        var container = $(".noidung");
        container.empty();
        container.append('<div>Đang tìm kiếm...</div>');

        $.post('SP_API.aspx', {
            action: 'search',
            Loai: 'HoiVien',
            timKiem: keyword
        }, function (data) {
            container.empty();
            if (data.length > 0) {
                data.forEach(record => {
                    var div = $(`<div class='info' id='hoivien-${record.MaHV}'></div>`);
                    hoiVienDiv.append($("<div class='ma-hoivien'></div>").text("Mã Hội Viên: " + record.MaHoiVien));
                    hoiVienDiv.append($("<div class='ten-hoivien'></div>").text("Tên hội viên: " + record.TenHoiVien));
                    hoiVienDiv.append($("<div class='so-dienthoai'></div>").text("Số điện thoại: " + record.SoDienThoai));
                    hoiVienDiv.append($("<div class='email'></div>").text("Email: " + record.Email));
                    div.append(`<button type="button" onclick="suaHoiVien('${record.MaHV}', this)">Sửa</button>
                            <button type="button" onclick="xoaHoiVien('${record.MaHV}', this)">Xóa</button>`);
                    container.append(div);
                    checklogin();
                });
            } else {
                container.append('<div>Không tìm thấy kết quả nào.</div>');
            }
        }, 'json');
    }
    window.them_hoivien = function () { 
        var html = `
        <form id="addHoiVienForm">
            <div class="mb-3">
                <label for="maHoiVienInput" class="form-label">Mã Hội Viên</label>
                <input type="text" class="form-control" id="maHoiVienInput" required>
            </div>
            <div class="mb-3">
                <label for="tenHoiVienInput" class="form-label">Tên Hội Viên</label>
                <input type="text" class="form-control" id="tenHoiVienInput" required>
            </div>
            <div class="mb-3">
                <label for="soDienThoaiInput" class="form-label">Số Điện Thoại</label>
                <input type="text" class="form-control" id="soDienThoaiInput" required>
            </div>
            <div class="mb-3">
                <label for="emailInput" class="form-label">Email</label>
                <input type="email" class="form-control" id="emailInput" required>
            </div>
        </form>
    `;

        $.confirm({
            title: 'Thêm Hội Viên Mới',
            content: html,
            buttons: {
                add: {
                    text: 'Thêm',
                    btnClass: 'btn-primary',
                    action: function () {
                        var maHoiVien = $('#maHoiVienInput').val();
                        var tenHoiVien = $('#tenHoiVienInput').val();
                        var soDienThoai = $('#soDienThoaiInput').val();
                        var email = $('#emailInput').val();

                        $.post('SP_API.aspx', {
                            action: 'add_hoivien',
                            MaHoiVien: maHoiVien,
                            TenHoiVien: tenHoiVien,
                            SoDienThoai: soDienThoai,
                            Email: email
                        }, function (data) {
                            if (data.ok) {
                                $.alert('Thêm Hội Viên Thành Công');
                                loadHoiVien();
                            } else {
                                $.alert('Thêm Hội Viên Thất Bại');
                            }
                        }, 'json');
                    }
                },
                cancel: {
                    text: 'Hủy',
                    btnClass: 'btn-secondary',
                }
            }
        });
    }
    window.sua_hoivien = function (maHoiVien, button) { 
        var hoiVienDiv = $(button).closest(`#hoivien-${maHoiVien}`);
        var currentMaHoiVien = hoiVienDiv.find('.ma-hoivien').text().replace("Mã Hội Viên: ", "").trim();
        var currentTenHoiVien = hoiVienDiv.find('.ten-hoivien').text().replace("Tên hội viên: ", "").trim();
        var currentSoDienThoai = hoiVienDiv.find('.so-dienthoai').text().replace("Số điện thoại: ", "").trim();
        var currentEmail = hoiVienDiv.find('.email').text().replace("Email: ", "").trim();

        var html = `
        <form id="editHoiVienForm">
            <div class="mb-3">
                <label for="tenHoiVienEditInput" class="form-label">Mã Hội Viên: ${currentMaHoiVien}</label>
            </div>
            <div class="mb-3">
                <label for="tenHoiVienEditInput" class="form-label">Tên Hội Viên</label>
                <input type="text" class="form-control" id="tenHoiVienEditInput" value="${currentTenHoiVien}">
            </div>
            <div class="mb-3">
                <label for="soDienThoaiEditInput" class="form-label">Số Điện Thoại</label>
                <input type="text" class="form-control" id="soDienThoaiEditInput" value="${currentSoDienThoai}">
            </div>
            <div class="mb-3">
                <label for="emailEditInput" class="form-label">Email</label>
                <input type="email" class="form-control" id="emailEditInput" value="${currentEmail}">
            </div>
        </form>
    `;

        $.confirm({
            title: 'Chỉnh Sửa Hội Viên',
            content: html,
            buttons: {
                save: {
                    text: 'Lưu',
                    btnClass: 'btn-primary',
                    action: function () {
                        var newTenHoiVien = $('#tenHoiVienEditInput').val();
                        var newSoDienThoai = $('#soDienThoaiEditInput').val();
                        var newEmail = $('#emailEditInput').val();

                        $.post('SP_API.aspx', {
                            action: 'update_hoivien',
                            MaHoiVien: maHoiVien,
                            TenHoiVien: newTenHoiVien,
                            SoDienThoai: newSoDienThoai,
                            Email: newEmail
                        }, function (data) {
                            if (data.ok) {
                                $.alert('Chỉnh Sửa Thành Công');
                                hoiVienDiv.find('.info div').eq(1).text("Tên hội viên: " + newTenHoiVien);
                                hoiVienDiv.find('.info div').eq(2).text("Số điện thoại: " + newSoDienThoai);
                                hoiVienDiv.find('.info div').eq(3).text("Email: " + newEmail);
                            } else {
                                $.alert('Chỉnh Sửa Thất Bại');
                            }
                        }, 'json');
                    }
                },
                cancel: {
                    text: 'Hủy',
                    btnClass: 'btn-secondary',
                }
            }
        });
    }
    window.xoa_hoivien = function (maHoiVien, button) { 
        $.confirm({
            title: 'Xác nhận xóa',
            content: 'Bạn có chắc chắn muốn xóa hội viên này?',
            buttons: {
                confirm: {
                    text: 'Xóa',
                    btnClass: 'btn-danger',
                    action: function () {
                        $.post('SP_API.aspx', { action: 'delete_hoivien', MaHoiVien: maHoiVien }, function (data) {
                            if (data.ok) {
                                $.alert('Xóa Thành Công');
                                $(button).closest(`#hoivien-${maHoiVien}`).remove();
                            } else {
                                $.alert('Xóa Thất Bại');
                            }
                        }, 'json');
                    }
                },
                cancel: {
                    text: 'Hủy',
                    btnClass: 'btn-secondary',
                }
            }
        });
    }

    function loadLopHoc() {
        var container = $(".noidung");
        var btnContainer = $(".add");
        var search = $(".search");
        container.empty();
        btnContainer.empty();
        search.empty();
        search.append(`                    
         <input type="text" id="searchInput" class="form-control" placeholder="Nhập từ khóa tìm kiếm..." style="width: auto; display: inline-block;" />
         <button class="btn btn-primary" onclick="searchLopHoc()">Tìm kiếm</button>`);

        btnContainer.append('<button type="button" onclick="them_lophoc()">Thêm Thẻ Thành Viên</button>');
        container.append('<div>Đang tải dữ liệu...</div>');

        $.post('SP_API.aspx', { action: 'get_infor', Loai: 'LopHoc' }, function (data) {
            container.empty();
            if (data.length > 0) {
                data.forEach(record => {
                    var lopHocDiv = $(`<div class='info' id='lophoc-${record.MaLop}'></div>`);
                    lopHocDiv.append($("<div class='ma-lop'></div>").text("Mã lớp: " + record.MaLop));
                    lopHocDiv.append($("<div class='ten-lop'></div>").text("Tên lớp: " + record.TenLop));
                    lopHocDiv.append($("<div class='ma-hlv'></div>").text("Mã huấn luyện viên: " + record.MaHLV));
                    lopHocDiv.append(`<button type="button" class="sua-btn" onclick="sua_lophoc('${record.MaLop}', this)">Sửa</button>
                                        <button type="button" class="xoa-btn" onclick="xoa_lophoc('${record.MaLop}', this)">Xóa</button>`);
                    container.append(lopHocDiv);
                    checklogin();
                });
            } else {
                container.append('<div>Không có dữ liệu nào.</div>');
            }
        }, 'json');
    }
    window.searchLopHoc = function () { 
        var keyword = $("#searchInput").val();
        var container = $(".noidung");
        container.empty();
        container.append('<div>Đang tìm kiếm...</div>');

        $.post('SP_API.aspx', {
            action: 'search',
            Loai: 'LopHoc',
            timKiem: keyword
        }, function (data) {
            container.empty();
            if (data.length > 0) {
                data.forEach(record => {
                    var lopHocDiv = $(`<div class='info' id='lophoc-${record.MaLop}'></div>`);
                    lopHocDiv.append($("<div class='ma-lop'></div>").text("Mã lớp: " + record.MaLop));
                    lopHocDiv.append($("<div class='ten-lop'></div>").text("Tên lớp: " + record.TenLop));
                    lopHocDiv.append($("<div class='ma-hlv'></div>").text("Mã huấn luyện viên: " + record.MaHLV));
                    lopHocDiv.append(`<button type="button" class="sua-btn" onclick="sua_lophoc('${record.MaLop}', this)">Sửa</button>
                                        <button type="button" class="xoa-btn" onclick="xoa_lophoc('${record.MaLop}', this)">Xóa</button>`);
                    container.append(lopHocDiv);
                    checklogin();
                });
            } else {
                container.append('<div>Không tìm thấy kết quả nào.</div>');
            }
        }, 'json');
    }
    window.them_lophoc = function () { 
        var html = `
        <form id="addLopHocForm">
            <div class="mb-3">
                <label for="maLopInput" class="form-label">Mã Lớp</label>
                <input type="text" class="form-control" id="maLopInput" required>
            </div>
            <div class="mb-3">
                <label for="tenLopInput" class="form-label">Tên Lớp</label>
                <input type="text" class="form-control" id="tenLopInput" required>
            </div>
            <div class="mb-3">
                <label for="maHLVInput" class="form-label">Mã Huấn Luyện Viên</label>
                <input type="text" class="form-control" id="maHLVInput" required>
            </div>
        </form>
    `;

        $.confirm({
            title: 'Thêm Lớp Học Mới',
            content: html,
            buttons: {
                add: {
                    text: 'Thêm',
                    btnClass: 'btn-primary',
                    action: function () {
                        var maLop = $('#maLopInput').val();
                        var tenLop = $('#tenLopInput').val();
                        var maHLV = $('#maHLVInput').val();

                        $.post('SP_API.aspx', {
                            action: 'add_lophoc',
                            MaLop: maLop,
                            TenLop: tenLop,
                            MaHLV: maHLV
                        }, function (data) {
                            if (data.ok) {
                                $.alert('Thêm Lớp Học Thành Công');
                                loadLopHoc();
                            } else {
                                $.alert('Thêm Lớp Học Thất Bại');
                            }
                        }, 'json');
                    }
                },
                cancel: {
                    text: 'Hủy',
                    btnClass: 'btn-secondary',
                }
            }
        });
    }
    window.sua_lophoc = function (maLop, button) { 
        var lopHocDiv = $(button).closest(`#lophoc-${maLop}`);
        var currentMaLop = lopHocDiv.find('.ma-lop').text().replace("Mã lớp: ", "").trim();
        var currentTenLop = lopHocDiv.find('.ten-lop').text().replace("Tên lớp: ", "").trim();
        var currentMaHLV = lopHocDiv.find('.ma-hlv').text().replace("Mã huấn luyện viên: ", "").trim();

        var html = `
        <form id="editLopHocForm">
            <div class="mb-3">
                <label for="tenLopEditInput" class="form-label">Mã Lớp : ${currentMaLop}</label>
            </div> 
            <div class="mb-3">
                <label for="tenLopEditInput" class="form-label">Tên Lớp</label>
                <input type="text" class="form-control" id="tenLopEditInput" value="${currentTenLop}">
            </div>
            <div class="mb-3">
                <label for="maHLVEditInput" class="form-label">Mã Huấn Luyện Viên</label>
                <input type="text" class="form-control" id="maHLVEditInput" value="${currentMaHLV}">
            </div>
        </form>
    `;

        $.confirm({
            title: 'Chỉnh Sửa Lớp Học',
            content: html,
            buttons: {
                save: {
                    text: 'Lưu',
                    btnClass: 'btn-primary',
                    action: function () {
                        var newTenLop = $('#tenLopEditInput').val();
                        var newMaHLV = $('#maHLVEditInput').val();

                        $.post('SP_API.aspx', {
                            action: 'update_lophoc',
                            MaLop: maLop,
                            TenLop: newTenLop,
                            MaHLV: newMaHLV
                        }, function (data) {
                            if (data.ok) {
                                $.alert('Chỉnh Sửa Thành Công');
                                lopHocDiv.find('div').eq(1).text("Tên lớp: " + newTenLop);
                                lopHocDiv.find('div').eq(2).text("Mã huấn luyện viên: " + newMaHLV);
                            } else {
                                $.alert('Chỉnh Sửa Thất Bại');
                            }
                        }, 'json');
                    }
                },
                cancel: {
                    text: 'Hủy',
                    btnClass: 'btn-secondary',
                }
            }
        });
    }
    window.xoa_lophoc = function (maLop, button) { 
        $.confirm({
            title: 'Xác nhận xóa',
            content: 'Bạn có chắc chắn muốn xóa lớp học này?',
            buttons: {
                confirm: {
                    text: 'Xóa',
                    btnClass: 'btn-danger',
                    action: function () {
                        $.post('SP_API.aspx', { action: 'delete_lophoc', MaLop: maLop }, function (data) {
                            if (data.ok) {
                                $.alert('Xóa Thành Công');
                                $(button).closest(`#lophoc-${maLop}`).remove();
                            } else {
                                $.alert('Xóa Thất Bại');
                            }
                        }, 'json');
                    }
                },
                cancel: {
                    text: 'Hủy',
                    btnClass: 'btn-secondary',
                }
            }
        });
    }

    function loadLichLopHoc() {
        var container = $(".noidung");
        var btnContainer = $(".add");
        var search = $(".search");
        container.empty();
        btnContainer.empty();
        search.empty();

        search.append(`                    
        <input type="text" id="searchInput" class="form-control" placeholder="Nhập từ khóa tìm kiếm..." style="width: auto; display: inline-block;" />
        <button class="btn btn-primary" onclick="searchLichLopHoc()">Tìm kiếm</button>`);

        btnContainer.append('<button type="button" onclick="them_lichlophoc()">Thêm Lịch Lớp Học</button>');
        container.append('<div>Đang tải dữ liệu...</div>');

        $.post('SP_API.aspx', { action: 'get_infor', Loai: 'LichLopHoc' }, function (data) {
            container.empty();
            if (data.length > 0) {
                data.forEach(record => {
                    var lichLopHocDiv = $(`<div class='info' id='lichlophoc-${record.MaLich}'></div>`);
                    lichLopHocDiv.append($("<div class='ma-lich'></div>").text("Mã lịch: " + record.MaLich));
                    lichLopHocDiv.append($("<div class='ma-phong'></div>").text("Mã phòng: " + record.MaPhong));
                    lichLopHocDiv.append($("<div class='ma-lop'></div>").text("Mã lớp: " + record.MaLop));
                    lichLopHocDiv.append($("<div class='thoi-gian-batdau'></div>").text("Thời gian bắt đầu: " + record.ThoiGianBatDau));
                    lichLopHocDiv.append($("<div class='thoi-gian-ketthuc'></div>").text("Thời gian kết thúc: " + record.ThoiGianKetThuc));
                    lichLopHocDiv.append(`
                        <button type="button" class="sua-btn" onclick="sua_lichlophoc('${record.MaLich}', this)">Sửa</button>
                        <button type="button" class="xoa-btn" onclick="xoa_lichlophoc('${record.MaLich}', this)">Xóa</button>
                    `);
                    container.append(lichLopHocDiv);
                    checklogin();
                });
            } else {
                container.append('<div>Không có dữ liệu nào.</div>');
            }
        }, 'json');
    }
    window.searchLichLopHoc = function () {
        var keyword = $("#searchInput").val();
        var container = $(".noidung");
        container.empty();
        container.append('<div>Đang tìm kiếm...</div>');

        $.post('SP_API.aspx', {
            action: 'search',
            Loai: 'LichLopHoc',
            timKiem: keyword
        }, function (data) {
            container.empty();
            if (data.length > 0) {
                data.forEach(record => {
                    var lichLopHocDiv = $(`<div class='info' id='lichlophoc-${record.MaLich}'></div>`);
                    lichLopHocDiv.append($("<div class='ma-lich'></div>").text("Mã lịch: " + record.MaLich));
                    lichLopHocDiv.append($("<div class='ma-phong'></div>").text("Mã phòng: " + record.MaPhong));
                    lichLopHocDiv.append($("<div class='ma-lop'></div>").text("Mã lớp: " + record.MaLop));
                    lichLopHocDiv.append($("<div class='thoi-gian-batdau'></div>").text("Thời gian bắt đầu: " + record.ThoiGianBatDau));
                    lichLopHocDiv.append($("<div class='thoi-gian-ketthuc'></div>").text("Thời gian kết thúc: " + record.ThoiGianKetThuc));
                    lichLopHocDiv.append(`
                    <button type="button" class="sua-btn" onclick="sua_lichlophoc('${record.MaLich}', this)">Sửa</button>
                    <button type="button" class="xoa-btn" onclick="xoa_lichlophoc('${record.MaLich}', this)">Xóa</button>
                `);
                    container.append(lichLopHocDiv);
                    checklogin();
                });
            } else {
                container.append('<div>Không có dữ liệu nào.</div>');
            }
        }, 'json');
    };
    window.them_lichlophoc = function () {
        var html = `
    <form id="addLichForm">
        <div class="mb-3">
            <label for="maLichInput" class="form-label">Mã Lịch</label>
            <input type="text" class="form-control" id="maLichInput" required>
        </div>
        <div class="mb-3">
            <label for="maPhongInput" class="form-label">Mã Phòng</label>
            <input type="text" class="form-control" id="maPhongInput" required>
        </div>
        <div class="mb-3">
            <label for="maLopInput" class="form-label">Mã Lớp</label>
            <input type="text" class="form-control" id="maLopInput" required>
        </div>
        <div class="mb-3">
            <label for="thoiGianBatDauInput" class="form-label">Thời Gian Bắt Đầu</label>
            <input type="datetime-local" class="form-control" id="thoiGianBatDauInput" required>
        </div>
        <div class="mb-3">
            <label for="thoiGianKetThucInput" class="form-label">Thời Gian Kết Thúc</label>
            <input type="datetime-local" class="form-control" id="thoiGianKetThucInput" required>
        </div>
    </form>
    `;

        $.confirm({
            title: 'Thêm Lịch Lớp Học Mới',
            content: html,
            buttons: {
                add: {
                    text: 'Thêm',
                    btnClass: 'btn-primary',
                    action: function () {
                        var newLichData = {
                            action: 'add_lichlophoc',
                            MaLich: $('#maLichInput').val(),
                            MaPhong: $('#maPhongInput').val(),
                            MaLop: $('#maLopInput').val(),
                            ThoiGianBatDau: $('#thoiGianBatDauInput').val(),
                            ThoiGianKetThuc: $('#thoiGianKetThucInput').val()
                        };

                        $.post('SP_API.aspx', newLichData, function (data) {
                            if (data.ok) {
                                $.alert('Thêm lịch thành công');
                                loadLichLopHoc();
                            } else {
                                $.alert('Thêm lịch thất bại');
                            }
                        }, 'json');
                    }
                },
                cancel: {
                    text: 'Hủy',
                    btnClass: 'btn-secondary'
                }
            }
        });
    };
    window.sua_lichlophoc = function (maLich, button) {
        var lichLopHocDiv = $(button).closest(`#lichlophoc-${maLich}`);
        var currentMaLich = lichLopHocDiv.find('.ma-lich').text().replace("Mã lịch: ", "").trim();
        var currentMaPhong = lichLopHocDiv.find('.ma-phong').text().replace("Mã phòng: ", "").trim();
        var currentMaLop = lichLopHocDiv.find('.ma-lop').text().replace("Mã lớp: ", "").trim();
        var currentThoiGianBatDau = lichLopHocDiv.find('.thoi-gian-batdau').text().replace("Thời gian bắt đầu: ", "").trim();
        var currentThoiGianKetThuc = lichLopHocDiv.find('.thoi-gian-ketthuc').text().replace("Thời gian kết thúc: ", "").trim();

        var html = `
            <form id="editLichHocForm">
                <div class="mb-3">
                    <label for="maPhongEditInput" class="form-label">Mã Lịch : ${currentMaLich}</label>
                </div> 
                <div class="mb-3">
                    <label for="maPhongEditInput" class="form-label">Mã Phòng</label>
                    <input type="text" class="form-control" id="maPhongEditInput" value="${currentMaPhong}">
                </div>
                <div class="mb-3">
                    <label for="maLopEditInput" class="form-label">Mã Lớp</label>
                    <input type="text" class="form-control" id="maLopEditInput" value="${currentMaLop}">
                </div>
                <div class="mb-3">
                    <label for="thoiGianBatDauEditInput" class="form-label">Thời Gian Bắt Đầu</label>
                    <input type="datetime-local" class="form-control" id="thoiGianBatDauEditInput" 
                           value="${currentThoiGianBatDau.replace(" ", "T")}">
                </div>
                <div class="mb-3">
                    <label for="thoiGianKetThucEditInput" class="form-label">Thời Gian Kết Thúc</label>
                    <input type="datetime-local" class="form-control" id="thoiGianKetThucEditInput" 
                           value="${currentThoiGianKetThuc.replace(" ", "T")}">
                </div>
            </form>
            `;

        $.confirm({
            title: 'Chỉnh Sửa Lịch Lớp Học',
            content: html,
            buttons: {
                save: {
                    text: 'Lưu',
                    btnClass: 'btn-primary',
                    action: function () {
                        var newMaPhong = $('#maPhongEditInput').val();
                        var newMaLop = $('#maLopEditInput').val();
                        var newThoiGianBatDau = $('#thoiGianBatDauEditInput').val();
                        var newThoiGianKetThuc = $('#thoiGianKetThucEditInput').val();

                        $.post('SP_API.aspx', {
                            action: 'update_lichlophoc',
                            MaLich: maLich,
                            MaPhong: newMaPhong,
                            MaLop: newMaLop,
                            ThoiGianBatDau: newThoiGianBatDau,
                            ThoiGianKetThuc: newThoiGianKetThuc
                        }, function (data) {
                            if (data.ok) {
                                $.alert('Chỉnh Sửa Thành Công');
                                lichHocDiv.find('div').eq(1).text("Mã lịch: " + maLich);
                                lichHocDiv.find('div').eq(2).text("Mã phòng: " + newMaPhong);
                                lichHocDiv.find('div').eq(3).text("Mã lớp: " + newMaLop);
                                lichHocDiv.find('div').eq(4).text("Thời gian bắt đầu: " + newThoiGianBatDau.replace("T", " "));
                                lichHocDiv.find('div').eq(5).text("Thời gian kết thúc: " + newThoiGianKetThuc.replace("T", " "));
                            } else {
                                $.alert('Chỉnh Sửa Thất Bại');
                            }
                        }, 'json');
                    }
                },
                cancel: {
                    text: 'Hủy',
                    btnClass: 'btn-secondary',
                }
            }
        });
    };
    window.xoa_lichlophoc = function (maLich, button) {
        $.confirm({
            title: 'Xác Nhận Xóa',
            content: `Bạn có chắc muốn xóa lịch lớp học có mã: ${maLich}?`,
            buttons: {
                confirm: {
                    text: 'Xóa',
                    btnClass: 'btn-danger',
                    action: function () {
                        $.post('SP_API.aspx', { action: 'delete_lichlophoc', MaLich: maLich }, function (data) {
                            if (data.ok) {
                                $.alert('Xóa lịch thành công');
                                loadLichLopHoc();
                            } else {
                                $.alert('Xóa lịch thất bại');
                            }
                        }, 'json');
                    }
                },
                cancel: {
                    text: 'Hủy',
                    btnClass: 'btn-secondary'
                }
            }
        });
    };

    function loadHuongLuyenVien() {
        var container = $(".noidung");
        var btnContainer = $(".add");
        var search = $(".search");
        container.empty();
        btnContainer.empty();
        search.empty();
        search.append(`
        <input type="text" id="searchInput" class="form-control" placeholder="Nhập từ khóa tìm kiếm..." style="width: auto; display: inline-block;" />
        <button class="btn btn-primary" onclick="searchHuongLuyenVien()">Tìm kiếm</button>
        `);

        btnContainer.append('<button type="button" class="btn btn-success" onclick="themHuongLuyenVien()">Thêm Huấn Luyện Viên</button>');
        container.append('<div>Đang tải dữ liệu...</div>');

        $.post('SP_API.aspx', { action: 'get_infor', Loai: 'HuongLuyenVien' }, function (data) {
            container.empty();
            if (data.length > 0) {
                data.forEach(record => {
                    var huongLuyenVienDiv = $(`<div class='info' id='huongluyenvien-${record.MaHLV}'></div>`);
                    huongLuyenVienDiv.append($("<div class='ma-hlv'></div>").text("Mã huấn luyện viên: " + record.MaHLV));
                    huongLuyenVienDiv.append($("<div class='ten-hlv'></div>").text("Tên huấn luyện viên: " + record.TenHLV));
                    huongLuyenVienDiv.append($("<div class='chuyen-mon'></div>").text("Chuyên môn: " + record.ChuyenMon));
                    huongLuyenVienDiv.append(`
                        <button type="button" class="sua-btn" onclick="suaHuongLuyenVien('${record.MaHLV}', this)">Sửa</button>
                        <button type="button" class="xoa-btn" onclick="xoaHuongLuyenVien('${record.MaHLV}', this)">Xóa</button>
                    `);
                    container.append(huongLuyenVienDiv);
                    checklogin();
                });
            } else {
                container.append('<div>Không có dữ liệu nào.</div>');
            }
        }, 'json');
    }
    window.searchHuongLuyenVien = function () {
        var keyword = $("#searchInput").val();
        var container = $(".noidung");
        container.empty();
        container.append('<div>Đang tìm kiếm...</div>');

        $.post('SP_API.aspx', {
            action: 'search',
            Loai: 'HuongLuyenVien',
            TimKiem: keyword
        }, function (data) {
            container.empty();
            if (data.length > 0) {
                data.forEach(record => {
                    var huongLuyenVienDiv = $(`<div class='info' id='huongluyenvien-${record.MaHLV}'></div>`);
                    huongLuyenVienDiv.append($("<div class='ma-hlv'></div>").text("Mã huấn luyện viên: " + record.MaHLV));
                    huongLuyenVienDiv.append($("<div class='ten-hlv'></div>").text("Tên huấn luyện viên: " + record.TenHLV));
                    huongLuyenVienDiv.append($("<div class='chuyen-mon'></div>").text("Chuyên môn: " + record.ChuyenMon));
                    huongLuyenVienDiv.append(`
                        <button type="button" class="sua-btn" onclick="suaHuongLuyenVien('${record.MaHLV}', this)">Sửa</button>
                        <button type="button" class="xoa-btn" onclick="xoaHuongLuyenVien('${record.MaHLV}', this)">Xóa</button>
                    `);
                    container.append(huongLuyenVienDiv);
                    checklogin();
                });
            } else {
                container.append('<div>Không tìm thấy kết quả nào.</div>');
            }
        }, 'json');
    }
    window.themHuongLuyenVien = function () {
        $.confirm({
            title: 'Thêm Huấn Luyện Viên',
            content: `
            <form id="addForm">
                <div class="mb-3">
                    <label class="form-label">Mã huấn luyện viên</label>
                    <input type="text" id="MaHLV" class="form-control" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Tên huấn luyện viên</label>
                    <input type="text" id="TenHLV" class="form-control" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Chuyên môn</label>
                    <input type="text" id="ChuyenMon" class="form-control" />
                </div>
            </form>
        `,
            buttons: {
                save: {
                    text: 'Lưu',
                    btnClass: 'btn-success',
                    action: function () {
                        var MaHLV = $('#MaHLV').val();
                        var TenHLV = $('#TenHLV').val();
                        var ChuyenMon = $('#ChuyenMon').val();

                        if (!TenHLV || !ChuyenMon) {
                            $.alert('Vui lòng điền đầy đủ thông tin!');
                            return false;
                        }

                        $.post('SP_API.aspx', {
                            action: 'add_huongluyenvien',
                            MaHLV: MaHLV,
                            TenHLV: TenHLV,
                            ChuyenMon: ChuyenMon
                        }, function (response) {
                            if (response.success) {
                                $.alert('Thêm thành công!');
                                loadHuongLuyenVien();
                            } else {
                                $.alert('Có lỗi xảy ra!');
                            }
                        }, 'json');
                    }
                },
                cancel: {
                    text: 'Hủy',
                    btnClass: 'btn-secondary'
                }
            }
        });
    }
    window.suaHuongLuyenVien = function (maHLV, button) {
        var huongLuyenVienDiv = $(button).closest(`#huongluyenvien-${maHLV}`);
        var currentMaHLV = huongLuyenVienDiv.find('.ma-hlv').text().replace("Mã huấn luyện viên: ", "").trim();
        var currentTenHLV = huongLuyenVienDiv.find('.ten-hlv').text().replace("Tên huấn luyện viên: ", "").trim();
        var currentChuyenMon = huongLuyenVienDiv.find('.chuyen-mon').text().replace("Chuyên môn: ", "").trim();

        $.confirm({
            title: 'Sửa Huấn Luyện Viên',
            content: `
            <form id="editForm">
                <div class="mb-3">
                    <label class="form-label">Mã huấn luyện viên : ${currentMaHLV}</label>
                </div>  
                <div class="mb-3">
                    <label class="form-label">Tên huấn luyện viên</label>
                    <input type="text" id="TenHLV" class="form-control" value="${currentTenHLV}" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Chuyên môn</label>
                    <input type="text" id="ChuyenMon" class="form-control" value="${currentChuyenMon}" />
                </div>
            </form>
        `,
            buttons: {
                save: {
                    text: 'Lưu',
                    btnClass: 'btn-warning',
                    action: function () {
                        var newTenHLV = $('#TenHLV').val();
                        var newChuyenMon = $('#ChuyenMon').val();

                        $.post('SP_API.aspx', {
                            action: 'update_huongluyenvien',
                            MaHLV: maHLV,
                            TenHLV: newTenHLV,
                            ChuyenMon: newChuyenMon
                        }, function (data) {
                            if (data.ok) {
                                $.alert('Cập nhật thành công!');
                                loadHuongLuyenVien();
                            } else {
                                $.alert('Cập nhật thất bại');
                            }
                        }, 'json');
                    }
                },
                cancel: {
                    text: 'Hủy',
                    btnClass: 'btn-secondary'
                }
            }
        });
    }
    window.xoaHuongLuyenVien = function (maHLV, button) {
        $.confirm({
            title: 'Xóa Huấn Luyện Viên',
            content: 'Bạn có chắc chắn muốn xóa?',
            buttons: {
                confirm: {
                    text: 'Xác nhận',
                    btnClass: 'btn-danger',
                    action: function () {
                        $.post('SP_API.aspx', {
                            action: 'delete_huongluyenvien',
                            MaHLV: maHLV
                        }, function (response) {
                            if (response.success) {
                                $.alert('Xóa thành công!');
                                $(button).closest('.info').remove();
                            } else {
                                $.alert('Có lỗi xảy ra!');
                            }
                        }, 'json');
                    }
                },
                cancel: {
                    text: 'Hủy',
                    btnClass: 'btn-secondary'
                }
            }
        });
    }

    function loadPhongTap() {
        var container = $(".noidung");
        var btnContainer = $(".add");
        var search = $(".search");
        container.empty();
        btnContainer.empty();
        search.empty();
        search.append(`
        <input type="text" id="searchInput" class="form-control" placeholder="Nhập từ khóa tìm kiếm..." style="width: auto; display: inline-block;" />
        <button class="btn btn-primary" onclick="searchPhongTap()">Tìm kiếm</button>
    `);

        btnContainer.append('<button type="button" class="btn btn-success" onclick="themPhongTap()">Thêm Phòng Tập</button>');
        container.append('<div>Đang tải dữ liệu...</div>');

        $.post('SP_API.aspx', { action: 'get_infor', Loai: 'PhongTap' }, function (data) {
            container.empty();
            if (data.length > 0) {
                data.forEach(record => {
                    var html = `
                        <div class="info" id="phongtap-${record.MaPhong}">
                            <div class="ma-phong">Mã phòng: ${record.MaPhong}</div>
                            <div class="ten-phong">Tên phòng: ${record.TenPhong}</div>
                            <div class="dia-chi">Địa chỉ: ${record.DiaChi}</div>
                            <button type="button" class="sua-btn" onclick="suaPhongTap('${record.MaPhong}', this)">Sửa</button>
                            <button type="button" class="xoa-btn" onclick="xoaPhongTap('${record.MaPhong}', this)">Xóa</button>
                        </div>
                    `;
                    container.append(html);
                    checklogin();
                });
            } else {
                container.append('<div>Không có dữ liệu nào.</div>');
            }
        }, 'json');
    }
    window.searchPhongTap = function () {
        var keyword = $("#searchInput").val();
        var container = $(".noidung");
        container.empty();
        container.append('<div>Đang tìm kiếm...</div>');

        $.post('SP_API.aspx', {
            action: 'search',
            Loai: 'PhongTap',
            TimKiem: keyword
        }, function (data) {
            container.empty();
            if (data.length > 0) {
                data.forEach(record => {
                    var html = `
                       <div class="info" id="phongtap-${record.MaPhong}">
                            <div class="ma-phong">Mã phòng: ${record.MaPhong}</div>
                            <div class="ten-phong">Tên phòng: ${record.TenPhong}</div>
                            <div class="dia-chi">Địa chỉ: ${record.DiaChi}</div>
                            <button type="button" class="sua-btn" onclick="suaPhongTap('${record.MaPhong}', this)">Sửa</button>
                            <button type="button" class="xoa-btn" onclick="xoaPhongTap('${record.MaPhong}', this)">Xóa</button>
                        </div>
                    `;
                    container.append(html);
                    checklogin();
                });
            } else {
                container.append('<div>Không tìm thấy kết quả nào.</div>');
            }
        }, 'json');
    }
    window.themPhongTap = function () {
        $.confirm({
            title: 'Thêm Phòng Tập',
            content: `
        <form id="addForm">
            <div class="mb-3">
                <label class="form-label">Mã phòng</label>
                <input type="text" id="MaPhong" class="form-control" />
            </div>
            <div class="mb-3">
                <label class="form-label">Tên phòng</label>
                <input type="text" id="TenPhong" class="form-control" />
            </div>
            <div class="mb-3">
                <label class="form-label">Địa chỉ</label>
                <input type="text" id="DiaChi" class="form-control" />
            </div>
        </form>
    `,
            buttons: {
                save: {
                    text: 'Lưu',
                    btnClass: 'btn-success',
                    action: function () {
                        var MaPhong = $('#MaPhong').val();
                        var TenPhong = $('#TenPhong').val();
                        var DiaChi = $('#DiaChi').val();

                        if (!TenPhong || !DiaChi || !MaPhong) {
                            $.alert('Vui lòng điền đầy đủ thông tin!');
                            return false;
                        }

                        $.post('SP_API.aspx', {
                            action: 'add_phongtap',
                            MaPhong: MaPhong,
                            TenPhong: TenPhong,
                            DiaChi: DiaChi
                        }, function (response) {
                            if (response.success) {
                                $.alert('Thêm thành công!');
                                loadPhongTap();
                            } else {
                                $.alert('Có lỗi xảy ra!');
                            }
                        }, 'json');
                    }
                },
                cancel: {
                    text: 'Hủy',
                    btnClass: 'btn-secondary'
                }
            }
        });
    }
    window.suaPhongTap = function (maPhong, button) {
        var phongTapDiv = $(button).closest(`#phongtap-${maPhong}`);
        var currentMaPhong = phongTapDiv.find('.ma-phong').text().replace("Mã phòng: ", "").trim();
        var currentTenPhong = phongTapDiv.find('.ten-phong').text().replace("Tên phòng: ", "").trim();
        var currentDiaChi = phongTapDiv.find('.dia-chi').text().replace("Địa chỉ: ", "").trim();

        $.confirm({
            title: 'Sửa Phòng Tập',
            content: `
        <form id="editForm">
            <div class="mb-3">
                <label class="form-label">Mã phòng : ${currentMaPhong}</label>
            </div>
            <div class="mb-3">
                <label class="form-label">Tên phòng</label>
                <input type="text" id="TenPhong" class="form-control" value="${currentTenPhong}" />
            </div>
            <div class="mb-3">
                <label class="form-label">Địa chỉ</label>
                <input type="text" id="DiaChi" class="form-control" value="${currentDiaChi}" />
            </div>
        </form>
    `,
            buttons: {
                save: {
                    text: 'Lưu',
                    btnClass: 'btn-warning',
                    action: function () {
                        var newTenPhong = $('#TenPhong').val();
                        var newDiaChi = $('#DiaChi').val();

                        $.post('SP_API.aspx', {
                            action: 'update_phongtap',
                            MaPhong: maPhong,
                            TenPhong: newTenPhong,
                            DiaChi: newDiaChi
                        }, function (data) {
                            if (data.ok) {
                                $.alert('Cập nhật thành công!');
                                loadPhongTap();
                            } else {
                                $.alert('Cập nhật thất bại');
                            }
                        }, 'json');
                    }
                },
                cancel: {
                    text: 'Hủy',
                    btnClass: 'btn-secondary'
                }
            }
        });
    }
    window.xoaPhongTap = function (maPhong, button) {
        $.confirm({
            title: 'Xóa Phòng Tập',
            content: 'Bạn có chắc chắn muốn xóa?',
            buttons: {
                confirm: {
                    text: 'Xác nhận',
                    btnClass: 'btn-danger',
                    action: function () {
                        $.post('SP_API.aspx', {
                            action: 'delete_phongtap',
                            MaPhong: maPhong
                        }, function (response) {
                            if (response.success) {
                                $.alert('Xóa thành công!');
                                $(button).closest('.info').remove();
                            } else {
                                $.alert('Có lỗi xảy ra!');
                            }
                        }, 'json');
                    }
                },
                cancel: {
                    text: 'Hủy',
                    btnClass: 'btn-secondary'
                }
            }
        });
    }

    function dangky() {
        var user = $('#user').val();
        var name = $('#name').val();
        var dienthoai = $('#dienthoai').val();
        var gmail = $('#gmail').val();
        var password = $('#password').val();
        var password_repeat = $('#password_repeat').val();

        if (!name || !gmail || !password || !password_repeat || !user || !dienthoai) {
            alert("Vui lòng điền đủ thông tin.");
            return;
        }
        if (password != password_repeat) {
            alert("Mật khảu không khớp nhpạ lại đi.");
            return;
        }
        var Pass = CryptoJS.SHA1(password).toString();

        $.post('SP_API.aspx', {
            action: 'dangky',
            user: user,
            pass: Pass,
            gmail: gmail,
            dienthoai: dienthoai,
            name: name
        }, function (data) {
            if (data.ok == 1) {
                $(location).attr('href', 'login.html');
            } else {
                alert("Đăng ký thất bại");
            }
        }, 'json');
    };

    function login() {
        var user = $('#user').val();
        var password = $('#password').val();

        if (!user || !password) {
            alert("Vui lòng điền đủ thông tin.");
            return;
        }
        var Pass = CryptoJS.SHA1(password).toString();
        $.post('SP_API.aspx', { action: 'login', user: user, pass: Pass }, function (data) {
            if (data.ok === 1) {
                checklogin();
                $(location).attr('href', 'index.html');
            } else {
                if (loginAttempts >= 3) {
                    alert("Đăng nhập thất bại: " + data.msg);
                }

            }
        }, 'json');
    };

    function checklogin() {
        $.post('SP_API.aspx', { action: 'check_login' }, function (data) {

            if (data.ok === 1) {
                control(data.level);
            } else {
                control(0);
            }
        }, 'json');
    }

    function control(level) {
        level = parseInt(level);

        if (level === 1) {
            $('.xoa-btn, .sua-btn').css('display', 'none');
            $('.add').css('display', 'none');
            $('#HoiVien,#HuongLuyenVien,#PhongTap,#logintrang').css('display', 'none');
        } else if (level === 2) {
            $('.xoa-btn, .sua-btn, .btn-container').css('display', 'inline-block');
            $('.add').css('display', 'inline-block');
            $('#TheThanhVien, #LichLopHoc, #LopHoc, #HoiVien,#HuongLuyenVien,#PhongTap,#logouttrang').css('display', 'block');
            $('#logintrang').css('display', 'none');
        } else if (level === 0) {
            $('.xoa-btn, .sua-btn').css('display', 'none');
            $('.add').css('display', 'none');
            $('#TheThanhVien, #LichLopHoc, #LopHoc, #HoiVien,#HuongLuyenVien,#PhongTap,#logouttrang').css('display', 'none');
            $('#logintrang').css('display', 'block');
        }
    }

    function logout() {
        $.post('SP_API.aspx', { action: 'logout' }, function (data) {
            if (data.ok === 1) {
                $.alert('Đăng Xuất Thành Công');
                checklogin();
                $(location).attr('href', 'login.html');

            } else {
                $.alert('Đăng Xuất Thất Bại');

            }
        }, 'json');
    }
    $('#logintrang').click(function (event) {
        event.preventDefault();
        login();
    });
    $('#logouttrang').click(function (event) {
        event.preventDefault();
        logout();
    });
    $('#dangky').click(function (event) {
        event.preventDefault();
        dangky();
    });
    $('#login').click(function () {
        login();
    });
});