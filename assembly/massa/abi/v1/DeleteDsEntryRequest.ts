// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.3

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { StringValue } from "../../../google/protobuf/StringValue";

export class DeleteDsEntryRequest {
  static encode(message: DeleteDsEntryRequest, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.key);

    const address = message.address;
    if (address !== null) {
      writer.uint32(18);
      writer.fork();
      StringValue.encode(address, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): DeleteDsEntryRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new DeleteDsEntryRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        case 2:
          message.address = StringValue.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  key: Uint8Array;
  address: StringValue | null;

  constructor(
    key: Uint8Array = new Uint8Array(0),
    address: StringValue | null = null
  ) {
    this.key = key;
    this.address = address;
  }
}

export function encodeDeleteDsEntryRequest(
  message: DeleteDsEntryRequest
): Uint8Array {
  return Protobuf.encode(message, DeleteDsEntryRequest.encode);
}

export function decodeDeleteDsEntryRequest(
  buffer: Uint8Array
): DeleteDsEntryRequest {
  return Protobuf.decode<DeleteDsEntryRequest>(
    buffer,
    DeleteDsEntryRequest.decode
  );
}
