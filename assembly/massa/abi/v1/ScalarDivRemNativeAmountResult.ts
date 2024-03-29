// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeAmount } from "../../model/v1/NativeAmount";

export class ScalarDivRemNativeAmountResult {
  static encode(message: ScalarDivRemNativeAmountResult, writer: Writer): void {
    const quotient = message.quotient;
    if (quotient !== null) {
      writer.uint32(10);
      writer.fork();
      NativeAmount.encode(quotient, writer);
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

  static decode(reader: Reader, length: i32): ScalarDivRemNativeAmountResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ScalarDivRemNativeAmountResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quotient = NativeAmount.decode(reader, reader.uint32());
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

  quotient: NativeAmount | null;
  remainder: NativeAmount | null;

  constructor(
    quotient: NativeAmount | null = null,
    remainder: NativeAmount | null = null
  ) {
    this.quotient = quotient;
    this.remainder = remainder;
  }
}

export function encodeScalarDivRemNativeAmountResult(
  message: ScalarDivRemNativeAmountResult
): Uint8Array {
  return Protobuf.encode(message, ScalarDivRemNativeAmountResult.encode);
}

export function decodeScalarDivRemNativeAmountResult(
  buffer: Uint8Array
): ScalarDivRemNativeAmountResult {
  return Protobuf.decode<ScalarDivRemNativeAmountResult>(
    buffer,
    ScalarDivRemNativeAmountResult.decode
  );
}
