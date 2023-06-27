// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeAmount } from "..\\..\\model\\v1\\NativeAmount";

export class DivRemNativeAmountResult {
  static encode(message: DivRemNativeAmountResult, writer: Writer): void {
    writer.uint32(8);
    writer.int64(message.quotient);

    const remainder = message.remainder;
    if (remainder !== null) {
      writer.uint32(18);
      writer.fork();
      NativeAmount.encode(remainder, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): DivRemNativeAmountResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new DivRemNativeAmountResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quotient = reader.int64();
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

  quotient: i64;
  remainder: NativeAmount | null;

  constructor(quotient: i64 = 0, remainder: NativeAmount | null = null) {
    this.quotient = quotient;
    this.remainder = remainder;
  }
}

export function encodeDivRemNativeAmountResult(
  message: DivRemNativeAmountResult
): Uint8Array {
  return Protobuf.encode(message, DivRemNativeAmountResult.encode);
}

export function decodeDivRemNativeAmountResult(
  buffer: Uint8Array
): DivRemNativeAmountResult {
  return Protobuf.decode<DivRemNativeAmountResult>(
    buffer,
    DivRemNativeAmountResult.decode
  );
}
