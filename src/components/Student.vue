<style src = "./style.css"></style>

<template src = "./Student.html"></template>

<script>


 export default{
  data: function(){
    return{
    currentUser  : {},
    selectedUser : null,
    errorMsg : false,
    successMsg : false,
    showModal : false,
    showDeleteModal : false,
    showEditModal : false,
    showPayDialog : false,
    currentData : [{firstName : '',lastName:'',phone:'',email:'',address:''}],
    studentData : [{firstName : 'Manoj',lastName:'Thayil',phone : '8286563959',email: 'manojthayil786@gmail.com',address: 'Mumbai'},
                   {firstName : 'Amardeep',lastName:'Singh',phone : '7883787467',email: 'amar@986@gmail.com',address: 'Punjab'}
    
    ]
   }
 },
 methods:{
   addStudentData : function(){
     this.studentData.push(this.currentData);
     this.currentData = [];
     this.showModal = false;
     this.successMsg = true;
     setTimeout(()=>{
       this.successMsg = false;

     },1000)
   },

   deleteItem : function(index){
     console.log(index);
     this.selectedUser = index;
     this.showDeleteModal = true;
   },
   confirmDelete : function(){
     this.studentData.splice(this.selectedUser,1);
     this.showDeleteModal = !this.showDeleteModal;
   },
   updateStudentData : function(){
     this.studentData[this.index] = this.currentData;
   },
   editItem : function(index,user){
     console.log(index,user);
     this.showEditModal = true;
     this.index = index;
     this.currentUser = user;
   },
   payFees : function(firstName){
     this.showPayDialog = !this.showPayDialog;
     this.firstName = firstName;
   }

 }
 }


</script>

