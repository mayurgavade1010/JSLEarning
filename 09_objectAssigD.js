let professor=
{
   name:"Mayur",
   Education:"BE",
   Branch:"Computer",
   clg_name:"VidyaPratishthan",
   Programming_language:["Java","html",".net","c++",],
    degree:
    {
        engineering:"CSE",
        PHD:"Adv Computing",
      
    },
    certificate: ["Hacker Rank", "IFE course", "adv computing"],

    totalExperience:"14years",
}
console.log("=============Add 5 properties=======================");
console.log(professor);

console.log(`===============Nested Object "Degree" =====================`)

console.log(professor.degree);

console.log(`===============Add one Array "certificates"  =====================`)
console.log(professor.certificate);
console.log(professor);

console.log(`===============add new property "Total Experience" =====================`)
console.log(professor.totalExperience);
console.log(professor);

console.log(`===============modify existing property---->"total experience & engineering" =====================`)
professor.totalExperience=30;
console.log(professor);

console.log(`===============_____________  =====================`)
professor.engineering="Mechanical";
console.log(professor.degree);
console.log(professor);
console.log(`===============add new certificate "oracle" at the end =====================`)
professor.certificate.push("oracle");
 console.log(professor.certificate);
 console.log(professor);

 console.log(`===============log array "Certificate"  =====================`)
 console.log(professor.certificate);
 console.log(professor);

 console.log(`===============log complete object on console  =====================`)
console.log(professor);

console.log(`===============traverse array-->"certificate" =====================`)
for (const certi of professor.certificate) {
    console.log(certi);
}