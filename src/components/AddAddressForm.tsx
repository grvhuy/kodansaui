"use client";

import { useState } from "react";
import { MyButton } from "./MyButton";
import { Input } from "./ui/input";
import { addAddress } from "@/utils/api";

export const AddAddressForm = ({
  id,
  fullName,
  phoneNumber,
  street,
  city,
  country,
  postalCode,
}: {
  id: string | null;
  fullName: string;
  phoneNumber: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}) => {
  const [err, setErr] = useState<string | null>(null);

  const [_fullName, _setFullName] = useState<string>(fullName);
  const [_phoneNumber, _setPhoneNumber] = useState<string>(phoneNumber);
  const [_street, _setStreet] = useState<string>(street);
  const [_city, _setCity] = useState<string>(city);
  const [_country, _setCountry] = useState<string>(country);
  const [_postalCode, _setPostalCode] = useState<string>(postalCode);
  const [addedScuccessfully, setAddedSuccessfully] = useState<boolean>(false);

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !_fullName ||
      !_phoneNumber ||
      !_street ||
      !_city ||
      !_country ||
      !_postalCode
    ) {
      setErr("Please fill all fields");
      return;
    }

    try {
      await addAddress({
        fullName: _fullName,
        phoneNumber: _phoneNumber,
        street: _street,
        city: _city,
        country: _country,
        postalCode: _postalCode,
      }).then((res) => {
        if (res.message) {
          setErr(res.message);
        } else {
          setAddedSuccessfully(true);
        }
      })
    } catch (err: any) {
      setErr(err.response.data.message);
    }
  };

  return (
    <form className="flex flex-col space-y-2" onSubmit={handleOnSubmit}>
      {err && <p className="text-red-500">{err}</p>}
      {addedScuccessfully && (
        <p className="text-green-500">Address added successfully</p>
      )}
      <div className="grid grid-cols-2">
        <div className="flex flex-col">
          <label htmlFor="full-name">Full Name</label>
          <Input
            type="text"
            id="full-name"
            value={_fullName}
            onChange={(e) => _setFullName(e.target.value)}
            className="border-black w-full "
          />
        </div>
        <div className="flex flex-col ml-2">
          <label htmlFor="phone-number">Phone Number</label>
          <Input
            type="text"
            id="phone-number"
            value={_phoneNumber}
            onChange={(e) => _setPhoneNumber(e.target.value)}
            className="border-black w-full"
          />
        </div>
      </div>

      <label htmlFor="street">Street</label>
      <Input
        type="text"
        id="street"
        value={_street}
        onChange={(e) => _setStreet(e.target.value)}
        className="border-black"
      />
      <label htmlFor="city">City</label>
      <Input
        type="text"
        id="city"
        value={_city}
        onChange={(e) => _setCity(e.target.value)}
        className="border-black"
      />
      <label htmlFor="country">Country</label>
      <Input
        type="text"
        id="country"
        value={_country}
        onChange={(e) => _setCountry(e.target.value)}
        className="border-black"
      />
      <label htmlFor="postal-code">Postal Code</label>
      <Input
        type="text"
        id="postal-code"
        value={_postalCode}
        onChange={(e) => _setPostalCode(e.target.value)}
        className="border-black"
      />
      <button

        type="submit"
        className="mt2  text-2xl font-bold hover:bg-opacity-90  bg-black text-white p-4"
      >
        ADD
      </button>
    </form>
  );
};
