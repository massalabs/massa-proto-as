// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.3

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { ComparisonResult } from "../../model/v1/ComparisonResult";

export class ComparePubKeyResult {
  static encode(message: ComparePubKeyResult, writer: Writer): void {
    writer.uint32(8);
    writer.int32(message.result);
  }

  static decode(reader: Reader, length: i32): ComparePubKeyResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ComparePubKeyResult();

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

export function encodeComparePubKeyResult(
  message: ComparePubKeyResult
): Uint8Array {
  return Protobuf.encode(message, ComparePubKeyResult.encode);
}

export function decodeComparePubKeyResult(
  buffer: Uint8Array
): ComparePubKeyResult {
  return Protobuf.decode<ComparePubKeyResult>(
    buffer,
    ComparePubKeyResult.decode
  );
}
