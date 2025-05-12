//Thêm và xóa active ở các menuItem
const menuItems = document.querySelectorAll(".box-menu");

function AddnRemoveActive() {
    const id = this.getAttribute('id'); // mỗi menu item nên có ID riêng
    localStorage.setItem('activeMenu', id); // lưu ID vào localStorage
}

menuItems.forEach((item) => item.addEventListener('click', AddnRemoveActive))

// Khi tải trang, lấy lại item đã lưu và thêm class 'active'
window.addEventListener('DOMContentLoaded', () => {
    const activeId = localStorage.getItem('activeMenu');
    if (activeId) {
        const activeItem = document.getElementById(activeId);
        if (activeItem) activeItem.classList.add('active');
    }
});


function Submit(){
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;   
    const name = document.getElementById('name').value;
    var emailcheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    document.getElementById('submitError').style.display = 'none';

    if(name == "" && email == ""){
        document.getElementById('submitError').textContent = "Vui lòng nhập vào tên và email!";
        document.getElementById('submitError').style.display = 'block';
        return false;
    }
    if(name == "" ){
        document.getElementById('submitError').textContent = "Vui lòng nhập vào tên!";
        document.getElementById('submitError').style.display = 'block';
        return false;
    }
    if(email == ""){
        document.getElementById('submitError').textContent = "Vui lòng nhập vào email!";
        document.getElementById('submitError').style.display = 'block';
        return false;
    }
    if(!emailcheck.test(email)){
        document.getElementById('submitError').textContent = "Email không hợp lệ!";
        document.getElementById('submitError').style.display = 'block';
        return false;
    }
    if(message.length < 20 || message.length > 120){
        document.getElementById('submitError').textContent = 'Message: Ký tự tối thiểu là 20 và tối đa là 120!';
        document.getElementById('submitError').style.display = 'block';
        return false;
    }
    alert("Gửi thành công");
    document.getElementById('email').value = null;
    document.getElementById('message').value = null;   
    document.getElementById('name').value = null;
    return true;
}
