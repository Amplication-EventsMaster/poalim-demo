/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsJSONValue } from "../../validators";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { DeliveryCreateNestedManyWithoutChannelsInput } from "./DeliveryCreateNestedManyWithoutChannelsInput";
import { Type } from "class-transformer";
import { EnumChannelTypeField } from "./EnumChannelTypeField";

@InputType()
class ChannelCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  configField?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => DeliveryCreateNestedManyWithoutChannelsInput,
  })
  @ValidateNested()
  @Type(() => DeliveryCreateNestedManyWithoutChannelsInput)
  @IsOptional()
  @Field(() => DeliveryCreateNestedManyWithoutChannelsInput, {
    nullable: true,
  })
  deliveries?: DeliveryCreateNestedManyWithoutChannelsInput;

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
}

export { ChannelCreateInput as ChannelCreateInput };
