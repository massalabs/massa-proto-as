// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeTime } from "../../model/v1/NativeTime";

export class CheckedDivRemNativeTimeResult {
  static encode(message: CheckedDivRemNativeTimeResult, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.quotient);

    const remainder = message.remainder;
    if (remainder !== null) {
      writer.uint32(18);
      writer.fork();
      NativeTime.encode(remainder, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): CheckedDivRemNativeTimeResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CheckedDivRemNativeTimeResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quotient = reader.uint64();
          break;

        case 2:
          message.remainder = NativeTime.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  quotient: u64;
  remainder: NativeTime | null;

  constructor(quotient: u64 = 0, remainder: NativeTime | null = null) {
    this.quotient = quotient;
    this.remainder = remainder;
  }
}

export function encodeCheckedDivRemNativeTimeResult(
  message: CheckedDivRemNativeTimeResult
): Uint8Array {
  return Protobuf.encode(message, CheckedDivRemNativeTimeResult.encode);
}

export function decodeCheckedDivRemNativeTimeResult(
  buffer: Uint8Array
): CheckedDivRemNativeTimeResult {
  return Protobuf.decode<CheckedDivRemNativeTimeResult>(
    buffer,
    CheckedDivRemNativeTimeResult.decode
  );
}
