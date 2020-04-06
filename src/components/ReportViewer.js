import React, { Component } from "react";

export default class ReportViewer extends Component {
  componentDidMount() {

    window.jQuery("#reportViewer1").telerik_ReportViewer({
      serviceUrl: "https://demos.telerik.com/reporting/api/reports/",
      reportSource: {
        report:
          "Telerik.Reporting.Examples.CSharp.ProductSales, CSharp.ReportLibrary, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
      },
      scale: 1.0, 
      sendEmail: { enabled: true },
    });
  }

  render() {
    return <div id="reportViewer1"></div>;
  }
}
