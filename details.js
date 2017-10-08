var StudentDetails=
{
  StudentName:"Ram",
  DOB:"14-10-1994",
  Skills:"Developer",
  Address:{
  State:"Maharashtra",
  City:"Pune",
  Country:"India",
  pincode:"415002"
}
   };
   
StudentDetails.eyecolor="Black";

StudentDetails.mothers_name="Sangeeta";

delete StudentDetails.Address;

function displayDetails2(){
var details=" ";
var x;

for( x in StudentDetails)

details += StudentDetails[x] + '\n' ;

alert(details);

}
