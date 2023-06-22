// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeHash } from "../../model/v1/NativeHash";

export class NativeHashFromStringResult {
  static encode(message: NativeHashFromStringResult, writer: Writer): void {
    const convertedHash = message.convertedHash;
    if (convertedHash !== null) {
      writer.uint32(10);
      writer.fork();
      NativeHash.encode(convertedHash, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): NativeHashFromStringResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new NativeHashFromStringResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.convertedHash = NativeHash.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  convertedHash: NativeHash | null;

  constructor(convertedHash: NativeHash | null = null) {
    this.convertedHash = convertedHash;
  }
}

export function encodeNativeHashFromStringResult(
  message: NativeHashFromStringResult
): Uint8Array {
  return Protobuf.encode(message, NativeHashFromStringResult.encode);
}

export function decodeNativeHashFromStringResult(
  buffer: Uint8Array
): NativeHashFromStringResult {
  return Protobuf.decode<NativeHashFromStringResult>(
    buffer,
    NativeHashFromStringResult.decode
  );
}
