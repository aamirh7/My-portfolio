// console.log('hi aamir')
// document.querySelector('.cross').style.display = 'none'
// document.querySelector('.ham').addEventListener('click', () => {
//     document.querySelector('.sidebar').classList.toggle('sidebarGo');
//     if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
//         document.querySelector('.ham').style.display = 'inline'
//         document.querySelector('.cross').style.display = 'none'
//     }
//     else {
//         document.querySelector('.ham').style.display = 'none'
//         document.querySelector('.cross').style.display = 'inline'
//     }
// })

console.log('hi aamir');
document.querySelector('.cross').style.display = 'none';

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const ham = document.querySelector('.ham');
    const cross = document.querySelector('.cross');

    sidebar.classList.toggle('sidebarGo');

    if (sidebar.classList.contains('sidebarGo')) {
        ham.style.display = 'inline';
        cross.style.display = 'none';
    } else {
        ham.style.display = 'none';
        cross.style.display = 'inline';
    }
}

document.querySelector('.ham').addEventListener('click', toggleSidebar);
document.querySelector('.cross').addEventListener('click', toggleSidebar);
