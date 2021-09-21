$(document).ready(function(){

    const hamburgerIcon = document.querySelector('#hamburger-icon');
    const closeSideMenuIcon = document.querySelector('#close-side-menu');
    const equipment = document.querySelector('#equipment');
    const department = document.querySelector('#department');
    const equipmentList = document.querySelector('#equipment-list');
    const departmentList = document.querySelector('#department-list');

    const sideMenu = document.querySelector('#side-menu');
    const mainSection = document.querySelector('#main-section');
    const navbar = document.querySelector('#navbar');

    
    // APPLICARION STARTS HERE
    hamburgerIcon.addEventListener('click', (e)=>{
        sideMenu.classList.remove('remove-width');
        sideMenu.classList.add('add-width');
    });

    closeSideMenuIcon.addEventListener('click', (e)=>{
        sideMenu.classList.remove('add-width');
        sideMenu.classList.add('remove-width');
    })
    
    equipment.addEventListener('click', (e)=>{
        equipmentList.classList.toggle('show-items');
    });

    department.addEventListener('click', (e)=>{
        departmentList.classList.toggle('show-items');
    });
    
    
    
});