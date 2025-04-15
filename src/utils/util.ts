import * as XLSX from 'xlsx';

type Nullable<T> = T | null;
type EventDispatcher<T> = (arg0: T) => void;

function downloadCSV(data: Record<string, any>[], filename = 'data.csv') {
    if (!data.length) return;

    // 첫번째 객체의 키를 헤더로 사용
    const headers = Object.keys(data[0]);
    const csvRows = [headers.join(',')];

    // 각 객체의 값을 CSV 행으로 변환 (값 안의 따옴표는 이스케이프 처리)
    data.forEach(row => {
        const values = headers.map(header => {
            const val = row[header] ?? '';
            return `"${String(val).replace(/"/g, '""')}"`;
        });
        csvRows.push(values.join(','));
    });

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function downloadXLSX(data: object[], filename = 'data.xlsx') {
    // JSON 데이터를 워크시트로 변환
    const worksheet = XLSX.utils.json_to_sheet(data);
    // 새 워크북 생성 후 워크시트를 추가
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    // 워크북을 바이너리 배열로 작성
    const workbookBinary = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([workbookBinary], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function checkPostposition(str: string) {
    //name의 마지막 음절의 유니코드(UTF-16) 
    const charCode = str.charCodeAt(str.length - 1);

    //유니코드의 한글 범위 내에서 해당 코드의 받침 확인
    const consonantCode = (charCode - 44032) % 28;

    if (consonantCode === 0) {
        //0이면 받침 없음 -> 를
        return false;
    }
    //1이상이면 받침 있음 -> 을
    return true;
}

function formatDate(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day} ${hour}:${minute}`;
}

export type {
    Nullable,
    EventDispatcher
};

export const generateSID = () => Math.floor(Math.random() * 10000);

export {
    downloadCSV,
    downloadXLSX,
    checkPostposition,
    formatDate
};