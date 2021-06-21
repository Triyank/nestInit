import { Module } from "@nestjs/common";
import { JsonwebToken } from "./jsonwebtoken";
import { Bcrypt } from "./bcrypt";

@Module({
    providers: [JsonwebToken, Bcrypt],
    exports:  [JsonwebToken, Bcrypt]
})

export class CommonUtilsModule {}