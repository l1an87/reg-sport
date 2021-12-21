import {Controller, Get, Param, Response, StreamableFile} from '@nestjs/common';
import {FilesService} from "./files.service";

@Controller('files')
export class FilesController {
    constructor(
        private filesService: FilesService,
    ) {
    }

    @Get(':id/*')
    async getFile(
        @Response({passthrough: true}) res,
        @Param('id') id: string
    ) {
        const file = await this.filesService.findById(+id);
        res.set({
            'Content-Type': `${file.mimetype}`,
            'Content-Disposition': `attachment; filename="${encodeURIComponent(file.originalname)}"`,
        });
        return new StreamableFile(new Buffer(file.buffer));
    }
}
