"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChildService = void 0;
const common_1 = require("@nestjs/common");
const child_repository_1 = require("./child.repository");
let ChildService = class ChildService {
    constructor(childRepository) {
        this.childRepository = childRepository;
    }
    async registChild(body, User) {
        const { name, gender, birth, img, memo } = body;
        const isChildExist = await this.childRepository.existByParent(User);
        isChildExist.map((child) => {
            if (child.name === body.name) {
                throw new common_1.HttpException('아이의 이름이 중복되지 않았는지 확인해 주세요.', 400);
            }
        });
        console.log(isChildExist);
        const child = await this.childRepository.registChild({
            name,
            gender,
            birth,
            parentId: User.id,
            img,
            memo,
        });
        return child;
    }
    async updateChild(id, body) {
        const child = await this.childRepository.updateChild(id, body);
        return child;
    }
    async deleteChild(id) {
        return await this.childRepository.deleteChild(id);
    }
};
ChildService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [child_repository_1.ChildRepository])
], ChildService);
exports.ChildService = ChildService;
//# sourceMappingURL=child.service.js.map