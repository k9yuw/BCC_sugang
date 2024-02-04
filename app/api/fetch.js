import fetch from "node-fetch";
// import pkg from "file-saver";
// import { Blob } from "node-fetch";
// import { saveAs } from "file-saver/FileSaver";

const app = async () => {
  const res = await fetch(
    "https://sugang.korea.ac.kr/view?attribute=lectHakbuData&fake=1706861398192",
    {
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "sec-ch-ua":
          '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
      },
      referrer:
        "https://sugang.korea.ac.kr/core?attribute=coreMain&pWname=4a611df9-3126-d6a1-e3ce-78803d3afa60&flagx=X&fake=1706859985872",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: "pYear=2024&pTerm=1R&pCampus=1&pGradCd=0136&pCourDiv=00&pCol=0140&pDept=0142&pCredit=&pDay=&pStartTime=&pEndTime=&pProf=&pCourCd=&pCourNm=&strYear=2024&strTerm=1R&strUserType=......&strChasu=",
      method: "POST",
      mode: "cors",
      credentials: "include",
    }
  );
  const data = await res.json();
  console.log(data);

  //   //   const FileSaver = require("file-saver");
  //   const blob = new Blob([data], {
  //     type: "text/plain;charset=utf-8",
  //   });
  //   //   const { saveAs } = pkg;
  //   const FileSaver = require("file-saver");
  //   FileSaver.saveAs(blob, "~/Documents/sugangPractice/data.txt");
};

app();
