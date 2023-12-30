console.log("test");
function print_user_input() {
    var user_input_emri = document.getElementById("fname").value;
    var user_input_phone = document.getElementById("phone").value;
    var user_input_adresa2 = document.getElementById("adresa2").value;
    var user_input_qyteti = document.getElementById("qyteti").value;
    var user_input_provinca = document.getElementById("provinca").value;
    var user_input_kodi = document.getElementById("kodi_postar").value;
    var user_input_shteti = document.getElementById("shteti").value;
    var input_array = [user_input_emri, user_input_phone, user_input_adresa2, user_input_qyteti, user_input_provinca, user_input_kodi, user_input_shteti];
    console.log('Entered data:', input_array);
}
