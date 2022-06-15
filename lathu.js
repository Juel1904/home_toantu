function myletter()
{
    let name = document.getElementById("name").value;
    // console.log(name);
    let content = name + "Than men"
    // document.write (content);
    document.getElementById("result").innerHTML = content;
}
