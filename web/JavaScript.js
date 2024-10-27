$(document).ready(function () {
    function loadTable() {
        var container = $("#conten");
        container.empty();
        container.append('<div>Đang tải dữ liệu...</div>');

        $.post('SP_API.aspx', { action: 'get_infor' }, function (data) {
            container.empty();
            if (data.length > 0) {
                data.forEach(lich => {
                    var eventDiv = $("<div class='event'></div>");

                    var lichDiv = $("<div id='lich-" + lich.MaLich + "' class='info-section'></div>");
                    var lichInfo = $("<div class='info'></div>");
                    var lichEdit = $("<div class='actions'></div>");
                    lichInfo.append($("<div id='malich'></div>").text("Mã lịch: " + lich.MaLich));
                    lichInfo.append($("<div></div>").text("Thời gian bắt đầu: " + new Date(lich.ThoiGianBatDau).toLocaleString()));
                    lichInfo.append($("<div></div>").text("Thời gian kết thúc: " + new Date(lich.ThoiGianKetThuc).toLocaleString()));
                    lichEdit.append(`<button class="edit-btn" onclick="sua_lich('${lich.MaLich}', this)">Sửa</button>
                                    <button class="delete-btn" onclick="Xoa_lich('${lich.MaLich}', this)">Xóa</button>`);

                    lichDiv.append(lichInfo, lichEdit);
                    eventDiv.append(lichDiv);

                    var phongDiv = $("<div id='phong-" + lich.MaPhong + "' class='info-section'></div>");
                    var phongInfo = $("<div class='info'></div>");
                    var phongEdit = $("<div class='actions'></div>");
                    phongInfo.append($("<div></div>").text("Mã phòng: " + lich.MaPhong));
                    phongInfo.append($("<div></div>").text("Tên phòng: " + lich.TenPhong));
                    phongInfo.append($("<div></div>").text("Địa chỉ phòng: " + lich.DiaChi));
                    phongEdit.append(`<button class="edit-btn" onclick="sua_phong('${lich.MaPhong}', this)">Sửa</button>`);
                    phongDiv.append(phongInfo, phongEdit);
                    eventDiv.append(phongDiv);

                    var lopDiv = $("<div id='lop-" + lich.MaLop + "' class='info-section'></div>");
                    var lopInfo = $("<div class='info'></div>");
                    var lopEdit = $("<div class='actions'></div>");
                    lopInfo.append($("<div></div>").text("Mã lớp: " + lich.MaLop));
                    lopInfo.append($("<div></div>").text("Tên lớp: " + lich.TenLop));
                    lopEdit.append(`<button class="edit-btn" onclick="sua_lop('${lich.MaLop}', this)">Sửa</button>`);
                    lopDiv.append(lopInfo, lopEdit);
                    eventDiv.append(lopDiv);

                    var hlvDiv = $("<div id='hlv-" + lich.MaHLV + "' class='info-section'></div>");
                    var hlvInfo = $("<div class='info'></div>");
                    var hlvEdit = $("<div class='actions'></div>");
                    hlvInfo.append($("<div></div>").text("Mã HLV: " + lich.MaHLV));
                    hlvInfo.append($("<div></div>").text("Tên HLV: " + lich.TenHLV));
                    hlvInfo.append($("<div></div>").text("Chuyên môn: " + lich.ChuyenMon));
                    hlvEdit.append(`<button class="edit-btn" onclick="sua_hlv('${lich.MaHLV}', this)">Sửa</button>`);
                    hlvDiv.append(hlvInfo, hlvEdit);
                    eventDiv.append(hlvDiv);

                    container.append(eventDiv);
                });
            } else {
                container.append('<div>Không có dữ liệu nào.</div>');
            }
        }, 'json');
    }


    window.sua_phong = function (maphong, button) {
        var phongDiv = $(button).closest('#phong-' + maphong);
        var currentTenPhong = phongDiv.find('.info div').eq(1).text().replace("Tên phòng: ", "").trim();
        var currentDiaChiPhong = phongDiv.find('.info div').eq(2).text().replace("Địa chỉ phòng: ", "").trim();

        var html = `
    <form id="editPhongForm">
        <div class="mb-3">
            <label for="tenphongEditInput" class="form-label">Tên Phòng</label>
            <input type="text" class="form-control" id="tenphongEditInput" value="${currentTenPhong}">
        </div>
        <div class="mb-3">
            <label for="diachiPhongEditInput" class="form-label">Địa Chỉ Phòng</label>
            <input type="text" class="form-control" id="diachiPhongEditInput" value="${currentDiaChiPhong}">
        </div>
    </form>
    `;

        $.confirm({
            title: 'Chỉnh Sửa Phòng',
            content: html,
            buttons: {
                save: {
                    text: 'Sửa',
                    btnClass: 'btn-primary',
                    action: function () {
                        var newTenPhong = $('#tenphongEditInput').val();
                        var newDiaChiPhong = $('#diachiPhongEditInput').val();

                        $.post('SP_API.aspx', { action: 'update_phongtap', maphong: maphong, tenphong: newTenPhong, diachi: newDiaChiPhong }, function (data) {
                            if (data.ok) {
                                $.alert('Chỉnh Sửa Thành Công');
                                phongDiv.find('.info div').eq(1).text("Tên phòng: " + newTenPhong);
                                phongDiv.find('.info div').eq(2).text("Địa chỉ phòng: " + newDiaChiPhong);
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

    window.sua_lop = function (malop, button) {
        var lopDiv = $(button).closest('#lop-' + malop);
        var currentTenLop = lopDiv.find('.info div').eq(1).text().replace("Tên lớp: ", "").trim();

        var html = `
    <form id="editLopForm">
        <div class="mb-3">
            <label for="tenlopEditInput" class="form-label">Tên Lớp</label>
            <input type="text" class="form-control" id="tenlopEditInput" value="${currentTenLop}">
        </div>
    </form>
    `;

        $.confirm({
            title: 'Chỉnh Sửa Lớp',
            content: html,
            buttons: {
                save: {
                    text: 'Sửa',
                    btnClass: 'btn-primary',
                    action: function () {
                        var newTenLop = $('#tenlopEditInput').val();

                        $.post('SP_API.aspx', { action: 'update_lophoc', malop: malop, tenlop: newTenLop }, function (data) {
                            if (data.ok) {
                                $.alert('Chỉnh Sửa Thành Công');
                                lopDiv.find('.info div').eq(1).text("Tên lớp: " + newTenLop);
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
    window.sua_hlv = function (mahlv, button) {
        var hlvDiv = $(button).closest('#hlv-' + mahlv);
        var currentTenHLV = hlvDiv.find('.info div').eq(1).text().replace("Tên HLV: ", "").trim();
        var currentChuyenMon = hlvDiv.find('.info div').eq(2).text().replace("Chuyên môn: ", "").trim();

        var html = `
    <form id="editHLVForm">
        <div class="mb-3">
            <label for="tenhlvEditInput" class="form-label">Tên HLV</label>
            <input type="text" class="form-control" id="tenhlvEditInput" value="${currentTenHLV}">
        </div>
        <div class="mb-3">
            <label for="chuyenmonEditInput" class="form-label">Chuyên Môn</label>
            <input type="text" class="form-control" id="chuyenmonEditInput" value="${currentChuyenMon}">
        </div>
    </form>
    `;

        $.confirm({
            title: 'Chỉnh Sửa HLV',
            content: html,
            buttons: {
                save: {
                    text: 'Sửa',
                    btnClass: 'btn-primary',
                    action: function () {
                        var newTenHLV = $('#tenhlvEditInput').val();
                        var newChuyenMon = $('#chuyenmonEditInput').val();

                        $.post('SP_API.aspx', { action: 'update_huongluyenvien', mahlv: mahlv, tenhlv: newTenHLV, chuyenmon: newChuyenMon }, function (data) {
                            if (data.ok) {
                                $.alert('Chỉnh Sửa Thành Công');
                                hlvDiv.find('.info div').eq(1).text("Tên HLV: " + newTenHLV);
                                hlvDiv.find('.info div').eq(2).text("Chuyên môn: " + newChuyenMon);
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
    window.sua_lich = function (malich, button) {
        var lichDiv = $(button).closest('#lich-' + malich);
        var currentThoiGianBatDau = new Date(lichDiv.find('.info div').eq(1).text().replace("Thời gian bắt đầu: ", "").trim());
        var currentThoiGianKetThuc = new Date(lichDiv.find('.info div').eq(2).text().replace("Thời gian kết thúc: ", "").trim());

        var html = `
    <form id="editLichForm">
        <div class="mb-3">
            <label for="batdauEditInput" class="form-label">Thời Gian Bắt Đầu</label>
            <input type="datetime-local" class="form-control" id="batdauEditInput" value="${currentThoiGianBatDau.toISOString().slice(0, 16)}">
        </div>
        <div class="mb-3">
            <label for="ketthucEditInput" class="form-label">Thời Gian Kết Thúc</label>
            <input type="datetime-local" class="form-control" id="ketthucEditInput" value="${currentThoiGianKetThuc.toISOString().slice(0, 16)}">
        </div>
    </form>
    `;

        $.confirm({
            title: 'Chỉnh Sửa Lịch',
            content: html,
            buttons: {
                save: {
                    text: 'Sửa',
                    btnClass: 'btn-primary',
                    action: function () {
                        var newThoiGianBatDau = $('#batdauEditInput').val();
                        var newThoiGianKetThuc = $('#ketthucEditInput').val();

                        $.post('SP_API.aspx', { action: 'UpdateLichLopHoc', malich: malich, thoigianbatdau: newThoiGianBatDau, thoigianketthuc: newThoiGianKetThuc }, function (data) {
                            if (data.ok) {
                                $.alert('Chỉnh Sửa Thành Công');
                                lichDiv.find('.info div').eq(1).text("Thời gian bắt đầu: " + new Date(newThoiGianBatDau).toLocaleString());
                                lichDiv.find('.info div').eq(2).text("Thời gian kết thúc: " + new Date(newThoiGianKetThuc).toLocaleString());
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

    window.Xoa_lich = function (maLich, button) {
        $.confirm({
            title: 'Xác nhận xóa',
            content: 'Bạn có chắc chắn muốn xóa lịch này không?',
            buttons: {
                yes: {
                    text: 'Có',
                    btnClass: 'btn-danger',
                    action: function () {
                        $.post('SP_API.aspx', { action: 'delete_lich', maLich: maLich }, function (data) {
                            if (data.ok) {
                                $("#" + "lich-" + maLich).remove();
                                $.alert('Xóa thành công!');
                                loadTable();
                            } else {
                                $.alert('Xóa thất bại: ' + data.msg);
                            }
                        }, 'json').fail(function () {
                            $.alert('Có lỗi xảy ra trong quá trình xóa.');
                        });
                    }
                },
                cancel: {
                    text: 'Không',
                    btnClass: 'btn-secondary',
                }
            }
        });
    };

    loadTable();
});
