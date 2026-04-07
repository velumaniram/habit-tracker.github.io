function addHabit() {
    const input = document.getElementById("habitInput");
    const habitText = input.value;

    if (habitText === "") return;

    const li = document.createElement("li");
    li.textContent = habitText;

    document.getElementById("habitList").appendChild(li);

    input.value = "";
}
