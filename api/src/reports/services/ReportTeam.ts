import * as xl from "excel4node";
import {Team} from "../../teams/entities/team.entity";
import {Member} from "../../members/entities/member.entity";


export class ReportTeam {
    public wb = new xl.Workbook({
        jszip: {
            compression: 'DEFLATE',
        },
        defaultFont: {
            size: 12,
            name: 'Calibri',
            color: '#000000',
        },
        dateFormat: 'dd.mm.yyyy',
    });
    public team: Team;
    public members: Member[];
    private ws;

    private style = {
        title: {
            font: {size: 16},
            alignment: {
                horizontal: 'center',
                vertical: 'center',
            }
        },
        team: {
            font: {size: 14, bold: true},
            alignment: {
                vertical: 'center',
            },
        },
        th: {
            border: {
                left: {style: 'thin', color: '#000000'},
                right: {style: 'thin', color: '#000000'},
                top: {style: 'thin', color: '#000000'},
                bottom: {style: 'thin', color: '#000000'},
            },
            fill: {
                type: 'pattern',
                patternType: 'solid',
                fgColor: 'DDDDDD',
            },
            alignment: {
                wrapText: true,
                horizontal: 'center',
                vertical: 'center',
            },
        },
        td: {
            border: {
                left: {style: 'thin', color: '#000000'},
                right: {style: 'thin', color: '#000000'},
                top: {style: 'thin', color: '#000000'},
                bottom: {style: 'thin', color: '#000000'},
            },
            alignment: {
                wrapText: true,
                vertical: 'center',
            },
        },
        center: {
            alignment: {
                wrapText: true,
                vertical: 'center',
                horizontal: 'center',
            },
        },
    };

    constructor(team: Team, members: Member[]) {
        this.team = team;
        this.members = members;
        this.ws = this.wb.addWorksheet('Лист 1');
    }

    private setSize() {
        const {ws} = this;
        ws.column(1).setWidth(3.5);
        ws.column(2).setWidth(3);
        ws.column(3).setWidth(14);
        ws.column(4).setWidth(14);
        ws.column(5).setWidth(15);
        ws.column(6).setWidth(3);
        ws.column(7).setWidth(3);
        ws.column(8).setWidth(13);
        ws.column(9).setWidth(13);
        ws.column(10).setWidth(14);
        ws.column(11).setWidth(18);
        ws.column(12).setWidth(16);
        ws.column(13).setWidth(16);

        ws.row(1).setHeight(27.75);
        ws.row(2).setHeight(24.75);
    }

    private setTitle(cell) {
        const {ws, style} = this;
        ws
            .cell(...cell)
            .string('Заявка на участие в соревнованиях Спартакиады АФК "Система"')
            .style(style.title);
    }

    private setTeam(row, colStart, colEnd) {
        const {ws, style, team} = this;
        ws
            .cell(row, colStart)
            .string('команда')
            .style(style.team);
        ws
            .cell(row, colStart + 1, row, colEnd, true)
            .string(`"${team.name}"`)
            .style(style.team);
    }

    private setTableHeader(row, col) {
        const {ws, style} = this;

        ws
            .cell(row, col, row + 1, col, true)
            .string('№')
            .style(style.th);
        ws
            .cell(row, col + 1, row + 1, col + 1, true)
            .string('Фамилия')
            .style(style.th);
        ws
            .cell(row, col + 2, row + 1, col + 2, true)
            .string('Имя')
            .style(style.th);
        ws
            .cell(row, col + 3, row + 1, col + 3, true)
            .string('Отчество')
            .style(style.th);
        ws
            .cell(row, col + 4, row, col + 5, true)
            .string('Пол')
            .style(style.th);
        ws
            .cell(row + 1, col + 4)
            .string('М')
            .style(style.th);
        ws
            .cell(row + 1, col + 5)
            .string('Ж')
            .style(style.th);
        ws
            .cell(row, col + 6, row + 1, col + 6, true)
            .string('Дата рожд.')
            .style(style.th);
        ws
            .cell(row, col + 7, row + 1, col + 7, true)
            .string('Поступил на работу')
            .style(style.th);
        ws
            .cell(row, col + 8, row + 1, col + 8, true)
            .string('Должность')
            .style(style.th);
        ws
            .cell(row, col + 9, row + 1, col + 9, true)
            .string('Вид спорта')
            .style(style.th);
        ws
            .cell(row, col + 10, row, col + 11, true)
            .string('Медицинский допуск')
            .style(style.th);
        ws
            .cell(row + 1, col + 10)
            .string('индивидуально')
            .style(style.th);
        ws
            .cell(row + 1, col + 11)
            .string('отметка врача')
            .style(style.th);
        return row + 2;
    }

    private setTableLine(row, col, i, data) {
        const {ws, style} = this;
        const manCell = data.gender === 'М' ? 'V' : '';
        const womanCell = data.gender === 'Ж' ? 'V' : '';
        const myMedical = data.medicalType === 'personal' && data.medicalCertificateId ? 'есть справка' : '';

        const rowEnd = row + (data.sportTypes.length ? data.sportTypes.length - 1 : 0);

        ws
            .cell(row, col, rowEnd, col, true)
            .number(i + 1)
            .style(style.center)
            .style(style.td);
        ws
            .cell(row, col + 1, rowEnd, col + 1, true)
            .string(data.lastName)
            .style(style.td);
        ws
            .cell(row, col + 2, rowEnd, col + 2, true)
            .string(data.firstName)
            .style(style.td);
        ws
            .cell(row, col + 3, rowEnd, col + 3, true)
            .string(data.middleName)
            .style(style.td);
        ws
            .cell(row, col + 4, rowEnd, col + 4, true)
            .string(manCell)
            .style({
                alignment: {
                    horizontal: 'center',
                },
            })
            .style(style.td);
        ws
            .cell(row, col + 5, rowEnd, col + 5, true)
            .string(womanCell)
            .style(style.center)
            .style(style.td);
        ws
            .cell(row, col + 6, rowEnd, col + 6, true)
            .date(new Date(data.birthday))
            .style(style.td);
        ws
            .cell(row, col + 7, rowEnd, col + 7, true)
            .date(new Date(data.inJob))
            .style(style.td);
        ws
            .cell(row, col + 8, rowEnd, col + 8, true)
            .string(data.position)
            .style(style.td);
        data.sportTypes.forEach((sportType, i) => {
            if (data.sportTypes.length === 1) {
                ws
                    .cell(row + i, col + 9)
                    .string(sportType.name)
                    .style(style.td);
                return;
            }
            if (i === 0) {
                ws
                    .cell(row + i, col + 9)
                    .string(sportType.name)
                    .style({
                        ...style.td,
                        border: {
                            left: {style: 'thin', color: '#000000'},
                            right: {style: 'thin', color: '#000000'},
                            top: {style: 'thin', color: '#000000'},
                        },
                    });
                return;
            }
            if (i === data.sportTypes.length - 1) {
                ws
                    .cell(row + i, col + 9)
                    .string(sportType.name)
                    .style({
                        ...style.td,
                        border: {
                            left: {style: 'thin', color: '#000000'},
                            right: {style: 'thin', color: '#000000'},
                            bottom: {style: 'thin', color: '#000000'},
                        },
                    });
                return;
            }
            ws
                .cell(row + i, col + 9)
                .string(sportType.name)
                .style({
                    ...style.td,
                    border: {
                        left: {style: 'thin', color: '#000000'},
                        right: {style: 'thin', color: '#000000'},
                    },
                });
        });
        ws
            .cell(row, col + 10, rowEnd, col + 10, true)
            .string(myMedical)
            .style(style.center)
            .style(style.td);
        ws
            .cell(row, col + 11, rowEnd, col + 11, true)
            .string('')
            .style(style.td);
        if (data.sportTypes.length < 2) {
            ws.row(row).setHeight(32);
        }
        return rowEnd + 1;
    }

    private setFooter(row, col) {
        const {ws, members} = this;
        ws
            .cell(row, col, row, col + 5, true)
            .string('Отметка врача:');
        ws
            .cell(row + 1, col, row + 1, col + 5, true)
            .string(`Всего допущено _${members.length}_ человека:`);
        ws
            .cell(row + 1, col + 6)
            .string('МП');
        ws
            .cell(row + 1, col + 8)
            .string('Подпись врача');
        ws
            .cell(row + 4, col, row + 4, col + 5, true)
            .string('Руководитель службы персонала');
        ws
            .cell(row + 5, col + 6)
            .string('МП');
        ws
            .cell(row + 5, col + 8)
            .string('Подпись');
        ws
            .cell(row + 6, col, row + 6, col + 5, true)
            .string('Генеральный директор');
    }

    public async generate() {
        const col = 2;
        let row = 3;
        this.setSize();
        this.setTitle([1, col, 1, 13, true]);
        this.setTeam(2, col + 1, 13);
        row = this.setTableHeader(row, 2);
        this.members.forEach((member, i) => {
            row = this.setTableLine(row, col, i, member);
        });

        this.setFooter(row + 4, col + 1)

        return this.wb;
    }
}
