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
exports.KidService = void 0;
const common_1 = require("@nestjs/common");
const kid_repository_1 = require("./kid.repository");
let KidService = class KidService {
    constructor(kidRepository) {
        this.kidRepository = kidRepository;
    }
    async registKid(User) {
        const kid = await this.kidRepository.registKid({
            parentId: User.id
        });
        return kid;
    }
    async getKids(User) {
        const kids = await this.kidRepository.getKids(User);
        return kids;
    }
    async updateKid(id, body) {
        const kid = await this.kidRepository.updateKid(id, body);
        return kid;
    }
    async deleteKid(id) {
        return await this.kidRepository.deleteKid(id);
    }
};
KidService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [kid_repository_1.KidRepository])
], KidService);
exports.KidService = KidService;
//# sourceMappingURL=kid.service.js.map