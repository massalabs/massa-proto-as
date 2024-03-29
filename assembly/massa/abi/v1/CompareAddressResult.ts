// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { ComparisonResult } from "../../model/v1/ComparisonResult";

export class CompareAddressResult {
  static encode(message: CompareAddressResult, writer: Writer): void {
    writer.uint32(8);
    writer.int32(message.result);
  }

  static decode(reader: Reader, length: i32): CompareAddressResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CompareAddressResult();

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

export function encodeCompareAddressResult(
  message: CompareAddressResult
): Uint8Array {
  return Protobuf.encode(message, CompareAddressResult.encode);
}

export function decodeCompareAddressResult(
  buffer: Uint8Array
): CompareAddressResult {
  return Protobuf.decode<CompareAddressResult>(
    buffer,
    CompareAddressResult.decode
  );
}
