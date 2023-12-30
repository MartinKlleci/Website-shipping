console.log("test");
function print_user_input() {
    
    const user_input_emri = (document.getElementById("fname") as HTMLInputElement).value;
    const user_input_phone = (document.getElementById("phone") as HTMLInputElement).value;
    const user_input_adresa2 = (document.getElementById("adresa2") as HTMLInputElement).value;
    const user_input_qyteti = (document.getElementById("qyteti") as HTMLInputElement).value;
    const user_input_provinca = (document.getElementById("provinca") as HTMLInputElement).value;
    const user_input_kodi = (document.getElementById("kodi_postar") as HTMLInputElement).value;
    const user_input_shteti = (document.getElementById("shteti") as HTMLInputElement).value;

    const input_array: string[] = [user_input_emri, user_input_phone, user_input_adresa2, user_input_qyteti, user_input_provinca, user_input_kodi, user_input_shteti];
    console.log('Entered data:', input_array);
      
}