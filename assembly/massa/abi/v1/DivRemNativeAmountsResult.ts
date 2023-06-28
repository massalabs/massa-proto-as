// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { UInt64Value } from "../../../google/protobuf/UInt64Value";
import { NativeAmount } from "../../model/v1/NativeAmount";

export class DivRemNativeAmountsResult {
  static encode(message: DivRemNativeAmountsResult, writer: Writer): void {
    const mandatoryQuotient = message.mandatoryQuotient;
    if (mandatoryQuotient !== null) {
      writer.uint32(10);
      writer.fork();
      UInt64Value.encode(mandatoryQuotient, writer);
      writer.ldelim();
    }

    const remainder = message.remainder;
    if (remainder !== null) {
      writer.uint32(18);
      writer.fork();
      NativeAmount.encode(remainder, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): DivRemNativeAmountsResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new DivRemNativeAmountsResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mandatoryQuotient = UInt64Value.decode(
            reader,
            reader.uint32()
          );
          break;

        case 2:
          message.remainder = NativeAmount.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  mandatoryQuotient: UInt64Value | null;
  remainder: NativeAmount | null;

  constructor(
    mandatoryQuotient: UInt64Value | null = null,
    remainder: NativeAmount | null = null
  ) {
    this.mandatoryQuotient = mandatoryQuotient;
    this.remainder = remainder;
  }
}

export function encodeDivRemNativeAmountsResult(
  message: DivRemNativeAmountsResult
): Uint8Array {
  return Protobuf.encode(message, DivRemNativeAmountsResult.encode);
}

export function decodeDivRemNativeAmountsResult(
  buffer: Uint8Array
): DivRemNativeAmountsResult {
  return Protobuf.decode<DivRemNativeAmountsResult>(
    buffer,
    DivRemNativeAmountsResult.decode
  );
}