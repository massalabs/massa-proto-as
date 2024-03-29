// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { AddressCategory } from "./AddressCategory";

export class NativeAddress {
  static encode(message: NativeAddress, writer: Writer): void {
    writer.uint32(8);
    writer.int32(message.category);

    writer.uint32(16);
    writer.uint64(message.version);

    writer.uint32(26);
    writer.bytes(message.content);
  }

  static decode(reader: Reader, length: i32): NativeAddress {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new NativeAddress();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.category = reader.int32();
          break;

        case 2:
          message.version = reader.uint64();
          break;

        case 3:
          message.content = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  category: AddressCategory;
  version: u64;
  content: Uint8Array;

  constructor(
    category: AddressCategory = 0,
    version: u64 = 0,
    content: Uint8Array = new Uint8Array(0)
  ) {
    this.category = category;
    this.version = version;
    this.content = content;
  }
}

export function encodeNativeAddress(message: NativeAddress): Uint8Array {
  return Protobuf.encode(message, NativeAddress.encode);
}

export function decodeNativeAddress(buffer: Uint8Array): NativeAddress {
  return Protobuf.decode<NativeAddress>(buffer, NativeAddress.decode);
}
