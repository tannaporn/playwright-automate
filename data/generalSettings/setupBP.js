import { getSharedProjectType,setSharedProjectType } from "../../src/utils/store/projectType.store";

setSharedProjectType('BPGroupCode','BPG02')
setSharedProjectType('BPCode','BP2')

const BusinessPartnerGroup ={
    "BPGroupCode":getSharedProjectType('BPGroupCode'),          //BP Group Code : *  (ห้ามซ้ำ)
    "BPGroupName":getSharedProjectType('BPGroupCode'),     //BP Group Name : *
    "BPGroupType":"Vendor",       //BP Group Type : *  (Vendor,Customer)
    "ChartofAccount":"21203002",        //Chart of Account : *
    "Status":"Active",     //Status : * (Active.Inactive)
    "SubType":"SAP"            //Sub Type : * (A,P,SAP)
}

export default BusinessPartnerGroup;


export const BusinessPartner={
    "BPCode":getSharedProjectType('BPCode'),                //BP Code : *
    "BPName":"Teka Construction",       //BP Name : *
    "BPType1":"S",    //(S=Vendor ,C=Customer )
    "BPType2":"C",   //(C=Company ,I=Private)
    "BPName(EN)":"Teka Construction",  //BP Name (EN) :
    "FederalTaxID":"1234567890127",                  //Federal Tax ID :
    "BPGroup":"F-V2",     //BP Group : *
//Tab  Contact Persons
    "ContactPersons":{
        "ContactID":"F-V2",     //Contact ID :*
        "FirstName":"F-V2",     //First Name :*
        "LastName":"F-V2",      //Last Name :*
        "Position":"Tester",   //Position :*
        "Telephone1":"0000000000", //Telephone 1 :*
    }, 
   //Address   Ship To 
    "Address":{
        "BranchID":"1234",     //Branch ID   :*
        "BranchName":"Bangkok",        //Branch Name  :*
        "StreetPOBox":"10",         //Street / PO Box  :*
        "Block":"test",             //Block  :*
        "City":"test",              //City  :*
        "ZipCode":"123456",        //Zip Code  :*
    },    
     //PaymentTerms     
    "PaymentTerms":{
        "PaymentTermsCode":"เครดิตเทอม 7 วัน",         //Payment Terms : *
        "BankCode":"KTBCA",                   //Bank Code :*
        "BankAccount":"0000000000",        //Bank Account *
        "BankAccountName":"M1",            //Bank Account Name	
        "BICSWIFTCode":"000",             //BIC/SWIFT Code
        "Branch":"True",                  //Branch

    }      
}


