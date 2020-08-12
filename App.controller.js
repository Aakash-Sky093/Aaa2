sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/Fragment",
	"sap/ui/model/json/JSONModel"
], function (Controller,Fragment,JSONModel) {
	"use strict";

	return Controller.extend("DB.DialogBox.controller.App", {
		onInit: function () {

		},
			oPopUp:null,
		popUp:function(){
			if(!this.oPopUp){
					var oid = this.createId("empFrag");
				this.oPopUp=new sap.ui.xmlfragment(oid,"DB.DialogBox.view.employee",this);
				this.getView().addDependent(this.oPopUp);
			}
			this.oPopUp.open();
		},
		onClose:function(){
			this.oPopUp.close();
		},
			itemData:[],
			onSubmit: function () {
				var oid = this.createId("empFrag");
			var id=	Fragment.byId(oid, "empId").getValue();
			var name=	Fragment.byId(oid, "empName").getValue();
			var company=	Fragment.byId(oid, "empCompany").getValue();
			var job=	Fragment.byId(oid, "empJob").getValue();
			var salary=	Fragment.byId(oid, "empSalary").getValue();
			
						var items={
			empId:id,
			empName:name,
			empSalary:salary,
			empCompany:company,
			empJob:job
		};
		
			
				this.itemData.push(items);
		
		var oData={
			EmployeeList:this.itemData
		};
		
		var oModel= new JSONModel(oData);
		this.getView().setModel(oModel);
			this.onClose();

			}
	});
});