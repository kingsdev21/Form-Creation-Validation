async function fetchUserData(){
    const apiUrl  = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    try{
    const response = await fetch(apiUrl);
    const users = await response.json();
    dataContainer.innerHTML = '';
    const userLists = document.createElement('ul');
    users.forEach(user => {
        const userItem = document.createElement('li');
        userItem.textContent = user.name;
        userLists.appendChild(userItem);
    });
    dataContainer.appendChild(userLists);
    } catch{
       dataContainer.innerHTML = '';
       dataContainer.textContent = 'Failed to load user data';
    }
    
}

document.addEventListener('DOMContentLoaded', function(){
    fetchUserData();
});