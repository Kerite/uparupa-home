import {Avatar, AvatarGroup, Card, CardBody, Tooltip} from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import {GetDevelopersResponse} from "@/app/api/developers/route";
import {FaExternalLinkAlt} from "react-icons/fa";

export const CardAgents = () => {
  const [developers, setDevelopers] = useState<GetDevelopersResponse>()

  useEffect(() => {
    fetch('/api/developers').then(async (resp) => {
      const data: GetDevelopersResponse = await resp.json();
      console.log(data);
      setDevelopers(data);
    })
  }, []);

  return (
    <Card className="bg-default-50 rounded-xl shadow-md px-4 py-6 w-full select-none">
      <CardBody className="py-5 gap-6">
        <div className="flex gap-2.5 justify-center">
          <div className="flex flex-col border-dashed border-2 border-divider py-2 px-6 rounded-xl">
            <span className="text-default-900 text-xl font-semibold">🌸开发者</span>
          </div>
        </div>

        <div className="flex items-center gap-6 flex-col">
          <span className="text-xs">争取提供令玩家满意的游戏体验</span>
          <AvatarGroup isBordered>
            {developers?.summary.map((user) => (
              <Tooltip
                className='select-none'
                key={user.username}
                content={
                  <div className='flex justify-center content-center justify-items-center items-center'>
                    <span className='mx-1'>{user.displayName}</span>
                    <FaExternalLinkAlt size={10}/>
                  </div>
                }>
                <Avatar color='success' className='cursor-pointer' src={user.avatar} size='lg'
                        onClick={() => window.open(user.user_page)}/>
              </Tooltip>
            ))}
          </AvatarGroup>
        </div>
      </CardBody>
    </Card>
  );
};