/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsJSONValue } from "../../validators";
import {
  IsOptional,
  IsDate,
  ValidateNested,
  IsString,
  IsEnum,
} from "class-validator";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { Type } from "class-transformer";
import { Delivery } from "../../delivery/base/Delivery";
import { EnumChannelTypeField } from "./EnumChannelTypeField";

@ObjectType()
class Channel {
  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  configField!: JsonValue;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [Delivery],
  })
  @ValidateNested()
  @Type(() => Delivery)
  @IsOptional()
  deliveries?: Array<Delivery>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    enum: EnumChannelTypeField,
  })
  @IsEnum(EnumChannelTypeField)
  @IsOptional()
  @Field(() => EnumChannelTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Channel as Channel };
