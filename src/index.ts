import { ResidencesDto } from "./Dto/ResidencesDto";
import { RequestService } from "./service/RequestService";
import { ResidecesService } from "./service/ResidencesService";

const residenceDto = new ResidencesDto();
const requestService = new RequestService();
const residecesService = new ResidecesService(requestService, residenceDto);

residecesService.run();
