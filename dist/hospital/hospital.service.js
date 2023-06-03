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
exports.HospitalService = void 0;
const common_1 = require("@nestjs/common");
const hospital_repository_1 = require("./hospital.repository");
let HospitalService = class HospitalService {
    constructor(hospitalRepository) {
        this.hospitalRepository = hospitalRepository;
    }
    findAll(depth1, depth2, size, page, sort) {
        return this.hospitalRepository.findAll(depth1, depth2, size, page, sort);
    }
    findOne(id) {
        return this.hospitalRepository.findById(id);
    }
    put(id, data) {
        return this.hospitalRepository.putById(id, data);
    }
    remove(id) {
        return `This action removes a #${id} hospital`;
    }
};
HospitalService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [hospital_repository_1.HospitalRepository])
], HospitalService);
exports.HospitalService = HospitalService;
//# sourceMappingURL=hospital.service.js.map