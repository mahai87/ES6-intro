document.getElementById('add-border').addEventListener('click', function () {
    const container = document.getElementById('friends-container')
    container.style.border = '3px solid yellow'
})
function addBackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue'
    }
}

function addFriend() {
    const friendsContainer = document.getElementById('friends-container');
    const newFriendDiv = document.createElement('div');
    newFriendDiv.classList.add('friend');
    // const newH3 = document.createElement('h3');
    // newH3.innerText = 'New Friend';
    // const newPara = document.createElement('p');
    // newPara.innerText = 'something something';
    // // newFriendDiv.appendChild(newH3);
    // // newFriendDiv.appendChild(newPara);
    // newFriendDiv.append(newH3, newPara);

    newFriendDiv.innerHTML = ` <h3 class="friend-name">NewFriend</h3>
    <p>Facilis, cum!</p>`;
    friendsContainer.appendChild(newFriendDiv);

}