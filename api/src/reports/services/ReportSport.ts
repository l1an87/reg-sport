import * as xl from "excel4node";
import {Member} from "../../members/entities/member.entity";
import {SportType} from "../../sport-type/entities/sport-type.entity";

export class ReportSport {
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
    public members: Member[];
    public sports: SportType[];

    private style = {
        title: {
            font: {size: 16},
            alignment: {
                horizontal: 'center',
                vertical: 'center',
            }
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

    constructor(sports: SportType[], members: Member[]) {
        this.sports = sports;
        this.members = members;
    }

    setSize(ws) {
        ws.column(1).setWidth(18);
        ws.column(2).setWidth(18);
        ws.column(3).setWidth(18);
        ws.column(4).setWidth(18);
        ws.column(5).setWidth(3);
        ws.column(6).setWidth(3);
        ws.row(1).setHeight(27.75);
    }

    setTitle(ws, name) {
        const {style} = this;
        ws
            .cell(1, 1, 1, 7, true)
            .string(`Список участников "${name}"`)
            .style(style.title);
    }

    setTableHeader(ws) {
        const {style} = this;
        ws
            .cell(2, 1, 3, 1, true)
            .string('Команда')
            .style(style.th);
        ws
            .cell(2, 2, 3, 2, true)
            .string('Фамилия')
            .style(style.th);
        ws
            .cell(2, 3, 3, 3, true)
            .string('Имя')
            .style(style.th);
        ws
            .cell(2, 4, 3, 4, true)
            .string('Отчество')
            .style(style.th);
        ws
            .cell(2, 5, 2, 6, true)
            .string('Пол')
            .style(style.th);
        ws
            .cell(3, 5)
            .string('М')
            .style(style.th);
        ws
            .cell(3, 6)
            .string('Ж')
            .style(style.th);
        ws
            .cell(2, 7, 3, 7, true)
            .string('Дата рожд.')
            .style(style.th);
    }

    setTableLine(ws, row, member) {
        const {style} = this;
        const manCell = member.gender === 'М' ? 'V' : '';
        const womanCell = member.gender === 'Ж' ? 'V' : '';
        ws
            .cell(row, 1)
            .string(member.team.name)
            .style(style.td);
        ws
            .cell(row, 2)
            .string(member.lastName)
            .style(style.td);
        ws
            .cell(row, 3)
            .string(member.firstName)
            .style(style.td);
        ws
            .cell(row, 4)
            .string(member.middleName)
            .style(style.td);
        ws
            .cell(row, 5)
            .string(manCell)
            .style({
                alignment: {
                    horizontal: 'center',
                },
            })
            .style(style.td);
        ws
            .cell(row, 6)
            .string(womanCell)
            .style({
                alignment: {
                    horizontal: 'center',
                },
            })
            .style(style.td);
        ws
            .cell(row, 7)
            .date(new Date(member.birthday))
            .style(style.td);
    }

    public async generate() {
        this.sports.forEach((sport) => {
            const ws = this.wb.addWorksheet(sport.name);
            this.setSize(ws);
            this.setTitle(ws, sport.name);
            this.setTableHeader(ws);
            this.members
                .filter(i => i.sportTypes.find(j => j.id === sport.id))
                .forEach((member, i) => {
                    this.setTableLine(ws, 4 + i, member);
                })
        });

        return this.wb;
    }
}
