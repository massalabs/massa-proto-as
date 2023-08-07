// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { ComparisonResult } from "../../model/v1/ComparisonResult";

export class CompareNativeTimeResult {
  static encode(message: CompareNativeTimeResult, writer: Writer): void {
    writer.uint32(8);
    writer.int32(message.result);
  }

  static decode(reader: Reader, length: i32): CompareNativeTimeResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CompareNativeTimeResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  result: ComparisonResult;

  constructor(result: ComparisonResult = 0) {
    this.result = result;
  }
}

export function encodeCompareNativeTimeResult(
  message: CompareNativeTimeResult
): Uint8Array {
  return Protobuf.encode(message, CompareNativeTimeResult.encode);
}

export function decodeCompareNativeTimeResult(
  buffer: Uint8Array
): CompareNativeTimeResult {
  return Protobuf.decode<CompareNativeTimeResult>(
    buffer,
    CompareNativeTimeResult.decode
  );
}