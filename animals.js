function showInfo() {
    const input = document.getElementById("petNum").ariaValueMax;
    const petNumber = parseInt(input);


if (isNaN(petNumber), petNumber < 1, petNumber > petsData.length) {
    alert("Please enter a valid number between 1 and " + petstData.length);
    return;
}

    const petIndex = petNumber - 1;
    const selectedPet = petsData[petIndex];

    const petInfo = '${selectedPet.petName} the ${selectedPet.breed} is ${selectedPet.age} years old. This pet weighs ${selectedPet.weightInKilos} kilos.';

    const selectedPetInfo = document.querySelector('.selectedPetInfo');
    selectedPetInfo.textContent = petInfo;
}