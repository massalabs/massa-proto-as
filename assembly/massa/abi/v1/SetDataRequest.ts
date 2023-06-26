// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeAddress } from "..\\..\\model\\v1\\NativeAddress";

export class SetDataRequest {
  static encode(message: SetDataRequest, writer: Writer): void {
    const address = message.address;
    if (address !== null) {
      writer.uint32(10);
      writer.fork();
      NativeAddress.encode(address, writer);
      writer.ldelim();
    }

    writer.uint32(18);
    writer.bytes(message.key);

    writer.uint32(26);
    writer.bytes(message.value);
  }

  static decode(reader: Reader, length: i32): SetDataRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new SetDataRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = NativeAddress.decode(reader, reader.uint32());
          break;

        case 2:
          message.key = reader.bytes();
          break;

        case 3:
          message.value = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  address: NativeAddress | null;
  key: Uint8Array;
  value: Uint8Array;

  constructor(
    address: NativeAddress | null = null,
    key: Uint8Array = new Uint8Array(0),
    value: Uint8Array = new Uint8Array(0)
  ) {
    this.address = address;
    this.key = key;
    this.value = value;
  }
}

export function encodeSetDataRequest(message: SetDataRequest): Uint8Array {
  return Protobuf.encode(message, SetDataRequest.encode);
}

export function decodeSetDataRequest(buffer: Uint8Array): SetDataRequest {
  return Protobuf.decode<SetDataRequest>(buffer, SetDataRequest.decode);
}
