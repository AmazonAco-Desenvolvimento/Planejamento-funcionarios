import { Injectable } from '@angular/core';
import * as ExcelJS from 'exceljs';
import FileSaver, * as fileSaver from 'file-saver';
import saveAs from 'file-saver';
import { StoredDataService } from './stored-data.service';
import { customer_extra_details } from '../Interfaces/general-dtos';

@Injectable({
  providedIn: 'root',
})
export class ExcellSheetService {
  constructor(private store: StoredDataService) {}

  async downloadExcel(items: customer_extra_details[]): Promise<void> {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Relatório');

    // === HEADER LAYOUT ===
    sheet.mergeCells('A1:C1');
    sheet.getCell('A1').value = `SÁBADO (${items[0].data})`;
    sheet.getCell('A1').alignment = {
      horizontal: 'center',
      vertical: 'middle',
    };
    sheet.getCell('A1').fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFFF00' },
    };
    sheet.getRow(1).height = 25;

    // Headers row 2 and 3
    sheet.mergeCells('A2:A3');
    sheet.getCell('A2').value = 'ORD.';
    sheet.mergeCells('B2:B3');
    sheet.getCell('B2').value = 'DATA';
    sheet.mergeCells('C2:C3');
    sheet.getCell('C2').value = 'MATRÍCULA';
    sheet.mergeCells('D2:D3');
    sheet.getCell('D2').value = 'NOME COLABORADOR / PRESTADOR';
    sheet.mergeCells('E2:E3');
    sheet.getCell('E2').value = 'CENTRO DE CUSTO (SETOR)';
    sheet.mergeCells('F2:F3');
    sheet.getCell('F2').value = 'EMPRESA';
    sheet.mergeCells('G2:G3');
    sheet.getCell('G2').value = 'TIPO DE ATIVIDADE EXTRA';

    sheet.getCell('H2').value = 'ROTA';
    sheet.mergeCells('I2:P2');
    sheet.getCell('I2').value = 'REFEITORIO';
    sheet.getCell('I2').fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFFF00' },
    };
    sheet.getCell('I2').alignment = {
      horizontal: 'center',
      vertical: 'middle',
    };

    sheet.mergeCells('Q2:Q3');
    sheet.getCell('Q2').value = 'TURNO';

    sheet.getCell('H3').value = 'SIM / NÃO';
    sheet.getCell('I3').value = 'CEIA';
    sheet.getCell('J3').value = 'DESJ.';
    sheet.getCell('K3').value = 'ALM.';
    sheet.getCell('L3').value = '1º LANC.';
    sheet.getCell('M3').value = 'LANC. DOB.';
    sheet.getCell('N3').value = 'LANC. ESP.';
    sheet.getCell('O3').value = '2º LANC. (3º T)';
    sheet.getCell('P3').value = 'JAN.';

    // Estilização dos headers
    [2, 3].forEach((rowIndex) => {
      const row = sheet.getRow(rowIndex);
      row.eachCell((cell) => {
        cell.alignment = {
          horizontal: 'center',
          vertical: 'middle',
          wrapText: true,
        };
        cell.font = { bold: true };
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'CCFFFF' },
        };
        cell.border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' },
        };
      });
    });

    // Largura das colunas
    sheet.columns.forEach((col) => (col.width = 15));
    sheet.getColumn('G').width = 40;

    // Dados
    const dataRows = items.map((item, index) => [
      (index + 1).toString(),
      item.data,
      item.id,
      item.nome_funcionario,
      item.setor,
      '',
      item.desc,
      item.rota ? 'sim' : 'não',
      item.ceia ? 'sim' : 'não',
      item.desj ? 'sim' : 'não',
      item.almoco ? 'sim' : 'não',
      item.lanc1 ? 'sim' : 'não',
      item.lancDob ? 'sim' : 'não',
      item.lancEsp ? 'sim' : 'não',
      item.lanc2 ? 'sim' : 'não',
      item.jan ? 'sim' : 'não',
      item.turno,
    ]);

    sheet.getColumn('A').width = 6;
    sheet.getColumn('B').width = 12;
    sheet.getColumn('C').width = 12;
    sheet.getColumn('D').width = 35;
    sheet.getColumn('E').width = 25;
    sheet.getColumn('F').width = 20;
    sheet.getColumn('G').width = 30;
    sheet.getColumn('H').width = 11;
    ['I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'].forEach(
      (col) => (sheet.getColumn(col).width = 10)
    );
    sheet.getColumn('Q').width = 15; // TURNO

    dataRows.forEach((row) => {
      const dataRow = sheet.addRow(row);
      dataRow.eachCell((cell) => {
        cell.alignment = {
          horizontal: 'center',
          vertical: 'middle',
          wrapText: true,
        };
        cell.font = { size: 10 };
        cell.border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' },
        };
      });
      dataRow.height = 30;
    });

    // Exportação do arquivo para o navegador
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    saveAs(blob, `relatorio_extra(${items[0].data}).xlsx`);
  }
}
